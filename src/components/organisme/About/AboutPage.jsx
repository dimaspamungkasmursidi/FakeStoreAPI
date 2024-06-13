import React, { useEffect } from 'react';
import gsap from 'gsap';

const TeamMember = ({ name, role, image }) => (
  <div className="text-center p-4 shadow-lg rounded-lg">
    <img
      className="w-32 h-32 rounded-full mx-auto mb-4"
      src={image}
      alt={`${name}'s profile`}
    />
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="">{role}</p>
  </div>
);

const Testimonial = ({ quote, author, image }) => (
  <div className="bg-slate-500 p-6 rounded-lg shadow-md text-center">
    <p className="italic mb-4">{quote}</p>
    <div className="flex items-center justify-center">
      <img
        className="w-10 h-10 rounded-full mr-4"
        src={image}
        alt={`${author}'s profile`}
      />
      <div>
        <h4 className="text-md font-semibold">{author}</h4>
      </div>
    </div>
  </div>
);

const AboutPage = () => {
  useEffect(() => {
    gsap.fromTo(
      ".animasi",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    );
  }, []);

  const teamMembers = [
    { name: 'Alice Johnson', role: 'CEO', image: 'https://www.blibli.com/friends-backend/wp-content/uploads/2023/02/B200044-1-JOBB-scaled.jpg' },
    { name: 'Bob Smith', role: 'CTO', image: 'https://www.blibli.com/friends-backend/wp-content/uploads/2023/02/B200044-2-Hamlin-scaled.jpg' },
    { name: 'Charlie Brown', role: 'Lead Designer', image: 'https://www.blibli.com/friends-backend/wp-content/uploads/2023/02/B200044-3-Versado-Mode-scaled.jpg' },
  ];

  const testimonials = [
    {
      quote: 'This is the best service I have ever used.',
      author: 'John Doe',
      image: 'https://cdn.kibrispdr.org/data/768/pas-foto-jas-hitam-57.jpg',
    },
    {
      quote: 'Amazing experience and great support!',
      author: 'Jono Doe',
      image: 'https://shanibacreative.com/wp-content/uploads/2023/12/cara-edit-foto-pakai-jas-di-canva.jpg',
    },
  ];

  return (
    <div className="p-8">
      <header className="text-center py-16">
        <h1 className="text-4xl londrina-black mb-4 animasi">About Us</h1>
        <p className=" max-w-xl mx-auto animasi">
          Learn more about our mission, vision, and the talented team driving our success.
        </p>
      </header>

      <section className="py-16">
        <h2 className="text-3xl londrina-black text-center mb-8 animasi">Our Mission</h2>
        <p className=" max-w-2xl mx-auto text-center animasi">
          Our mission is to provide top-quality products and services that improve the lives of our customers. We strive to innovate and continuously improve to meet the needs of our ever-changing world.
        </p>
      </section>

      <section className="py-16">
        <h2 className="text-3xl londrina-black text-center mb-8 animasi">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-8 animasi">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-8 animasi">Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-8 animasi">
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              image={testimonial.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
