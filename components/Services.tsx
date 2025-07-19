import Image from 'next/image';

export default function Services() {
  return (
    <section className="services-section">
      <h2>Mobile Auto Services in The Woodlands TX and Montgomery County</h2>
      <div className="service-card">
        <div className="service-item">
          <h3>Mobile Mechanic in The Woodlands TX</h3>
          <Image 
            src="/images/mobile-mechanic-woodlands.jpg"
            alt="Mobile Mechanic Near Me in The Woodlands TX - On-Site Auto Repair"
            width={400}
            height={300}
          />
          <ul>
            <li>On-site repairs at your home or office in Kingwood TX</li>
            <li>Tune-ups and maintenance</li>
            <li>Brake service and repair</li>
            <li>Suspension and steering</li>
            <li>Engine and transmission work in Montgomery County TX</li>
          </ul>
        </div>

        <div className="service-item">
          <h3>Mobile Auto Diagnostics in Kingwood TX</h3>
          <Image 
            src="/images/mobile-auto-diagnostics-woodlands.jpg"
            alt="Mobile Auto Diagnostics Near Me in Kingwood TX"
            width={400}
            height={300}
          />
          <ul>
            <li>Advanced diagnostic tools for vehicles in The Woodlands TX</li>
            <li>Check engine light diagnosis</li>
            <li>Quick and accurate results near me in Montgomery County TX</li>
          </ul>
        </div>

        <div className="service-item">
          <h3>Car Accessories Installation in Montgomery County TX</h3>
          <Image 
            src="/images/car-install-montgomerytx.jpg"
            alt="Car Accessories Installation - Mobile Mechanic Near Me in Montgomery County TX"
            width={400}
            height={300}
          />
          <ul>
            <li>Dash cams and GPS systems</li>
            <li>Audio and entertainment upgrades in The Woodlands TX</li>
            <li>Custom lighting and more near me in Kingwood TX</li>
          </ul>
        </div>

        <div className="service-item">
          <h3>Fleet Maintenance Near Me in The Woodlands TX</h3>
          <Image 
            src="/images/fleet-repair-montgomerytx.jpg"
            alt="Fleet Maintenance Services - Mobile Mechanic in Montgomery County TX"
            width={400}
            height={300}
          />
          <ul>
            <li>Tailored plans for businesses in Kingwood TX</li>
            <li>Regular inspections and repairs</li>
            <li>Minimize downtime near me in The Woodlands TX</li>
          </ul>
        </div>

        <div className="service-item">
          <h3>Mobile Oil Changes in Kingwood TX</h3>
          <Image 
            src="/images/mobile-oil-change-woodlands.jpg"
            alt="Mobile Oil Change Near Me in The Woodlands TX"
            width={400}
            height={300}
          />
          <ul>
            <li>Convenient on-site service in Montgomery County TX</li>
            <li>High-quality Mobil One oil</li>
            <li>Engine health check near me in Kingwood TX</li>
          </ul>
        </div>

        <div className="service-item">
          <h3>Hybrid and EV Services Near Me in Montgomery County TX</h3>
          <Image 
            src="/images/hybrid-ev.jpg"
            alt="Hybrid and EV Repair - Mobile Mechanic in Kingwood TX"
            width={400}
            height={300}
          />
          <ul>
            <li>Battery diagnostics and replacement in The Woodlands TX</li>
            <li>Specialized hybrid repairs</li>
            <li>Eco-friendly solutions near me in Montgomery County TX</li>
          </ul>
        </div>
      </div>
    </section>
  );
}