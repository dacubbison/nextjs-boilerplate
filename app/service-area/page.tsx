export default function ServiceArea() {
  return (
    <main className="service-area-main">
      <h1>Mobile Mechanic Service Areas in Montgomery County TX</h1>
      <p>I provide on-site auto repairs across The Woodlands, Kingwood, and surrounding areas. Check if you're in my service zone!</p>
      <table className="service-table">
        <thead>
          <tr>
            <th>City/Area</th>
            <th>ZIP Codes</th>
            <th>Services Available</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Woodlands TX</td>
            <td>77381, 77382, 77384</td>
            <td>Full diagnostics, repairs, maintenance</td>
          </tr>
          <tr>
            <td>Kingwood TX</td>
            <td>77339, 77345</td>
            <td>Brakes, AC, oil changes</td>
          </tr>
          {/* Add more rows */}
        </tbody>
      </table>
    </main>
  );
}