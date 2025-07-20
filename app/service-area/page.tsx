import Script from 'next/script';

export const metadata = {
  title: 'Service Area - Mobile Mechanic in Montgomery County TX | Top Tech Mobile',
  description: 'We proudly serve all of Montgomery County TX, including The Woodlands, Conroe, Kingwood, and more. Find your ZIP code and book our ASE-certified mobile services today.',
  keywords: 'mobile mechanic service area Montgomery County TX, ZIP codes The Woodlands TX, auto repair near me Conroe TX, mechanic Kingwood TX',
};

const zipAreas = [
  { zip: '77382', area: 'The Woodlands - Premier residential and business hub' },
  { zip: '77381', area: 'The Woodlands - Family-friendly neighborhoods with excellent amenities' },
  { zip: '77380', area: 'The Woodlands - Vibrant community with shopping and parks' },
  { zip: '77384', area: 'Conroe/The Woodlands - Growing area with convenient access' },
  { zip: '77389', area: 'Spring - Suburban charm near urban conveniences' },
  { zip: '77354', area: 'Magnolia - Peaceful rural setting with modern facilities' },
  { zip: '77355', area: 'Magnolia - Scenic and community-oriented' },
  { zip: '77385', area: 'Conroe - Dynamic city with lakeside living' },
  { zip: '77316', area: 'Montgomery - Lakeside recreation and relaxation' },
  { zip: '77356', area: 'Montgomery - Waterfront homes and outdoor activities' },
  { zip: '77301', area: 'Conroe - Historic downtown with cultural attractions' },
  { zip: '77302', area: 'Conroe - Affordable living with easy commutes' },
  { zip: '77303', area: 'Conroe - Growing residential communities' },
  { zip: '77304', area: 'Conroe - University town with educational opportunities' },
  { zip: '77306', area: 'Conroe - Suburban expansion with family focus' },
  { zip: '77318', area: 'Willis - Lake Conroe views and boating' },
  { zip: '77327', area: 'Cleveland - Nature trails and small-town vibe' },
  { zip: '77328', area: 'Cleveland - Community events and local charm' },
  { zip: '77333', area: 'Dobbin - Quiet rural escape' },
  { zip: '77339', area: 'Kingwood - Master-planned community with green spaces' },
  { zip: '77353', area: 'Magnolia - Equestrian-friendly with farms' },
  { zip: '77357', area: 'New Caney - Emerging area with new developments' },
  { zip: '77358', area: 'New Waverly - Forested serenity near Sam Houston National Forest' },
  { zip: '77362', area: 'Pinehurst - Golf courses and leisure' },
  { zip: '77365', area: 'Porter - Proximity to Houston with suburban feel' },
  { zip: '77372', area: 'Splendora - Affordable homes in growing region' },
  { zip: '77378', area: 'Willis - Lake living and water sports' },
  { zip: '77387', area: 'Shenandoah - Shopping and entertainment district' },
  { zip: '77393', area: 'Spring - Diverse communities with parks' },
  { zip: '77447', area: 'Hockley - Rural charm with easy access to highways' },
  { zip: '77873', area: 'Richards - Secluded and peaceful countryside' },
];

export default function ServiceArea() {
  return (
    <main className="service-area-main">
      <h1>Our Service Area in Montgomery County TX</h1>
      <p>We proudly serve every corner of Montgomery County, from the vibrant communities of The Woodlands to the scenic lakesides of Conroe and beyond. Our ASE-certified mobile mechanics come to you for convenient, reliable auto services. Check if your ZIP code is in our coverage area below!</p>

      <table className="service-table">
        <thead>
          <tr>
            <th>ZIP Code</th>
            <th>Area Highlights</th>
          </tr>
        </thead>
        <tbody>
          {zipAreas.map((item, index) => (
            <tr key={index}>
              <td>{item.zip}</td>
              <td>{item.area}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Not seeing your ZIP? Give us a call at 936-529-4748—we're always expanding!</p>

      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Top Tech Mobile",
          "serviceArea": {
            "@type": "AdministrativeArea",
            "name": "Montgomery County TX",
            "postalCode": zipAreas.map(item => item.zip).join(', ')
          },
          "description": "Mobile mechanic serving all ZIP codes in Montgomery County TX with positive, community-focused coverage."
        })}
      </Script>
    </main>
  );
}