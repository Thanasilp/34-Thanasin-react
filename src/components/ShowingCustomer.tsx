import { useState } from "react";
import { useEffect } from "react";

interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  career: string;
}

export const ShowingCustomer = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const storedCustomer = localStorage.getItem("customersLocal"); //ดึงข้อมูลจาก localStorage
    if (storedCustomer) {
      //ตัวเช็คก่อนว่ามีข้อมูลอะป่าว
      setCustomers(JSON.parse(storedCustomer)); //  ถ้ามี เสร็จโจร เอาข้อมูลมาแปลงจาก JSON เป็น JavaScript object และเก็บใน state users
    }
  }, []); //ทำงานครั้งเดียวหลัง components รันเสร็จ

  console.log(customers);
  return (
    <section className="flex justify-center mx-auto mt-4">
      {customers.length > 0 ? (
        <table className="w-full max-w-md border border-gray-300">
          <thead>
            <tr className="bg-slate-200">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Career</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.career}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">No data available</p>
      )}
    </section>
  );
};
