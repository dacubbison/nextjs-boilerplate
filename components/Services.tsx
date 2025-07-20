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
            alt="Mobile mechanic near me in The Woodlands TX for on-site auto repair, tune-ups, and brake service in Kingwood TX"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>On-site repairs at your home or office in Kingwood TX</li>
            <li>Tune-ups and maintenance</li>
            <li>Brake service and repair</li>
            <li>Suspension and steering</li>
            <li>Engine and transmission work in Montgomery County TX</li>
          </ul>
          <a href="/services/mobile-mechanic" className="learn-more">Learn More</a>
        </div>

        <div className="service-item">
          <h3>Mobile Auto Diagnostics in Kingwood TX</h3>
          <Image 
            src="/images/mobile-auto-diagnostics-woodlands.jpg"
            alt="Mobile auto diagnostics near me in Kingwood TX with advanced tools for check engine light diagnosis in Montgomery County TX"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Advanced diagnostic tools for vehicles in The Woodlands TX</li>
            <li>Check engine light diagnosis</li>
            <li>Quick and accurate results near me in Montgomery County TX</li>
          </ul>
          <a href="/services/auto-diagnostics" className="learn-more">Learn More</a>
        </div>

        <div className="service-item">
          <h3>Car Accessories Installation in Montgomery County TX</h3>
          <Image 
            src="/images/car-install-montgomerytx.jpg"
            alt="Car accessories installation near me in Montgomery County TX for dash cams, GPS, and audio upgrades in The Woodlands TX"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Dash cams and GPS systems</li>
            <li>Audio and entertainment upgrades in The Woodlands TX</li>
            <li>Custom lighting and more near me in Kingwood TX</li>
          </ul>
          <a href="/services/car-accessories" className="learn-more">Learn More</a>
        </div>

        <div className="service-item">
          <h3>Fleet Maintenance Near Me in The Woodlands TX</h3>
          <Image 
            src="/images/fleet-repair-montgomerytx.jpg"
            alt="Fleet maintenance services near me in The Woodlands TX with regular inspections and repairs in Kingwood TX"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Tailored plans for businesses in Kingwood TX</li>
            <li>Regular inspections and repairs</li>
            <li>Minimize downtime near me in The Woodlands TX</li>
          </ul>
          <a href="/services/fleet-maintenance" className="learn-more">Learn More</a>
        </div>

        <div className="service-item">
          <h3>Mobile Oil Changes in Kingwood TX</h3>
          <Image 
            src="/images/mobile-oil-change-woodlands.jpg"
            alt="Mobile oil change near me in Kingwood TX with high-quality Mobil One oil and engine health check in Montgomery County TX"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Convenient on-site service in Montgomery County TX</li>
            <li>High-quality Mobil One oil</li>
            <li>Engine health check near me in Kingwood TX</li>
          </ul>
          <a href="/services/oil-changes" className="learn-more">Learn More</a>
        </div>

        <div className="service-item">
          <h3>Hybrid and EV Services Near Me in Montgomery County TX</h3>
          <Image 
            src="/images/hybrid-ev.jpg"
            alt="Hybrid and EV repair near me in Montgomery County TX with battery diagnostics and specialized repairs in The Woodlands TX"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Battery diagnostics and replacement in The Woodlands TX</li>
            <li>Specialized hybrid repairs</li>
            <li>Eco-friendly solutions near me in Montgomery County TX</li>
          </ul>
          <a href="/services/hybrid-ev" className="learn-more">Learn More</a>
        </div>
      </div>
    </section>
  );
}