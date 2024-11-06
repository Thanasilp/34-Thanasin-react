import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface filteredInputProps {
  id: string;
  firstName: string;
  lastName: string;
  career: string;
}

export const AddingCustomer = () => {
  const [customers, setCustomers] = useState<filteredInputProps[]>([]);
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    career: "",
  });

  // 1. การดึงข้อมูลจาก localStorage เมื่อคอมโพเนนต์เริ่มทำงาน
  useEffect(() => {
    const storedCustomers = localStorage.getItem("customersLocal");
    if (storedCustomers) {
      setCustomers(JSON.parse(storedCustomers)); // ตั้งค่า customers ด้วยข้อมูลที่ดึงจาก localStorage
    }
  }, []);

  // ฟังก์ชันสำหรับจัดการการเปลี่ยนแปลงข้อมูลในฟอร์ม
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  // ฟังก์ชันสำหรับรีเซ็ตฟอร์ม
  const handleReset = () => {
    setFormInput({
      firstName: "",
      lastName: "",
      career: "",
    });
  };

  // 2. ฟังก์ชันบันทึกข้อมูลลูกค้าใหม่ใน customers และ localStorage
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      formInput.firstName.trim() === "" ||
      formInput.lastName.trim() === "" ||
      formInput.career.trim() === ""
    ) {
      alert("All fields are required!");
      return;
    }

    const newCustomer = {
      id: uuidv4(),
      firstName: formInput.firstName,
      lastName: formInput.lastName,
      career: formInput.career,
    };

    const updatedCustomerList = [...customers, newCustomer];
    setCustomers(updatedCustomerList);

    // บันทึกข้อมูลลูกค้าใน localStorage
    localStorage.setItem("customersLocal", JSON.stringify(updatedCustomerList));

    handleReset();
  };

  // ฟังก์ชันสำหรับลบลูกค้าออกจาก customers และอัปเดต localStorage
  const handleDelete = (id: string) => {
    const updatedCustomerList = customers.filter(
      (customer) => customer.id !== id
    );
    setCustomers(updatedCustomerList);

    // บันทึกข้อมูลที่ถูกลบแล้วใน localStorage
    localStorage.setItem("customersLocal", JSON.stringify(updatedCustomerList));
  };

  return (
    <>
      <section className="w-full max-w-md mx-auto bg-white rounded-xl p-6 mt-8 shadow-md">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
          ADD CUSTOMER
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col max-w-56 mx-auto"
        >
          <input
            type="text"
            name="firstName"
            value={formInput.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:outline-none"
          />
          <input
            type="text"
            name="lastName"
            value={formInput.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:outline-none"
          />
          <input
            type="text"
            name="career"
            value={formInput.career}
            onChange={handleChange}
            placeholder="Career"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:outline-none"
          />
          <div className="flex justify-center mt-4 gap-10">
            <button
              type="submit"
              className="px-6 py-1 bg-lime-600 text-white font-semibold rounded-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-1 bg-zinc-400 text-white font-semibold rounded-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
              disabled={
                !formInput.firstName && !formInput.lastName && !formInput.career
              }
            >
              Reset
            </button>
          </div>
        </form>
      </section>

      {customers.length > 0 && (
        <section className="flex justify-center mx-auto mt-4">
          <table className="w-full max-w-md border border-gray-300">
            <thead>
              <tr className="bg-slate-200">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Career</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.firstName}</td>
                  <td>{customer.lastName}</td>
                  <td>{customer.career}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(customer.id)}
                      className="text-red-600 font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
};
