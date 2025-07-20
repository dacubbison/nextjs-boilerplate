import Script from 'next/script';

export const metadata = {
  title: 'Service Area - Mobile Mechanic in Montgomery County TX | Top Tech Mobile',
  description: 'We serve all ZIP codes in Montgomery County TX, including The Woodlands, Conroe, and Kingwood. Check our sorted list by safety for availability.',
  keywords: 'mobile mechanic service area Montgomery County TX, ZIP codes The Woodlands TX, auto repair near me Kingwood TX',
};

const safeZips = [
  { zip: '77382', grade: 'A+', area: 'The Woodlands - Safest' },
  { zip: '77381', grade: 'A+', area: 'The Woodlands' },
  { zip: '77380', grade: 'A', area: 'The Woodlands' },
  { zip: '77384', grade: 'A', area: 'Conroe/The Woodlands' },
  { zip: '77389', grade: 'A-', area: 'Spring' },
  { zip: '77354', grade: 'A-', area: 'Magnolia' },
  { zip: '77355', grade: 'A-', area: 'Magnolia' },
  { zip: '77385', grade: 'A-', area: 'Conroe' },
  { zip: '77316', grade: 'B+', area: 'Montgomery' },
  { zip: '77356', grade: 'B', area: 'Montgomery' },
  { zip: '77301', grade: 'B-', area: 'Conroe' },
  { zip: '77302', grade: 'B-', area: 'Conroe' },
  { zip: '77303', grade: 'B-', area: 'Conroe' },
  { zip: '77304', grade: 'B-', area: 'Conroe' },
  { zip: '77306', grade: 'C+', area: 'Conroe' },
  { zip: '77318', grade: 'C', area: 'Willis' },
  { zip: '77327', grade: 'C', area: 'Cleveland' },
  { zip: '77328', grade: 'C', area: 'Cleveland' },
  { zip: '77333', grade: 'C-', area: 'Dobbin' },
  { zip: '77339', grade: 'C-', area: 'Kingwood' },
  { zip: '77353', grade: 'C-', area: 'Magnolia' },
  { zip: '77357', grade: 'D+', area: 'New Caney' },
  { zip: '77358', grade: 'D+', area: 'New Waverly' },
  { zip: '77362', grade: 'D', area: 'Pinehurst' },
  { zip: '77365', grade: 'D', area: 'Porter' },
  { zip: '77372', grade: 'D', area: 'Splendora' },
  { zip: '77378', grade: 'D-', area: 'Willis' },
  { zip: '77387', grade: 'D-', area: 'Shenandoah' },
  { zip: '77393', grade: 'D-', area: 'Spring' },
];

export default function ServiceArea() {
  return (
    <main>
      <h1>Our Service Area in Montgomery County TX</h1>
      <p>We provide mobile mechanic services across all ZIP codes in Montgomery County, prioritized by safety (safest first). If your ZIP is not listed, call 936-529-4748.</p>

      <table className="service-table">
        <thead>
          <tr>
            <th>ZIP Code</th>
            <th>Crime Grade</th>
            <th>Area/Notes</th>
          </tr>
        </thead>
        <tbody>
          {safeZips.map((item, index) => (
            <tr key={index}>
              <td>{item.zip}</td>
              <td>{item.grade}</td>
              <td>{item.area}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Top Tech Mobile",
          "serviceArea": {
            "@type": "AdministrativeArea",
            "name": "Montgomery County TX",
            "postalCode": safeZips.map(item => item.zip).join(', ')
          },
          "description": "Mobile mechanic serving all ZIP codes in Montgomery County TX, prioritized by safety."
        })}
      </Script>
    </main>
  );
}