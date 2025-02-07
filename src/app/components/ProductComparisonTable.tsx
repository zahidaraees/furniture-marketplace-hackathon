const ProductComparisonTable = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4">General</th>
            <th className="p-4">Asgaard Sofa</th>
            <th className="p-4">Outdoor Sofa Set</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-4">Sales Package</td>
            <td className="border p-4">1 sectional sofa</td>
            <td className="border p-4">1 Three Seater, 2 Single Seater</td>
          </tr>
          <tr>
            <td className="border p-4">Weight</td>
            <td className="border p-4">45 KG</td>
            <td className="border p-4">65 KG</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparisonTable;
