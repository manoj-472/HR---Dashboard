import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('../../components/Chart'), { ssr: false });

export default function Analytics() {
  const departmentData = {
    labels: ['HR', 'Engineering', 'Sales'],
    datasets: [
      {
        label: 'Average Rating',
        data: [4.2, 3.8, 4.5],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Analytics</h1>
      <Chart data={departmentData} type="bar" />
    </div>
  );
}