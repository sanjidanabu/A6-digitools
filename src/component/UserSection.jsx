import React from 'react';

const UserSection = () => {
    const statsData = [
    { id: 1, value: "50K+", label: "Active Users" },
    { id: 2, value: "200+", label: "Premium Tools" },
    { id: 3, value: "4.9", label: "Rating" },
  ];
    return (
         <section className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-around gap-8 text-white">
        {statsData.map((stat, index) => (
          <React.Fragment key={stat.id}>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</h2>
              <p className="text-purple-100 text-sm md:text-base uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
            
            
            {index < statsData.length - 1 && (
              <div className="hidden md:block h-12 w-[1px] bg-purple-300 opacity-50"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
    );
};

export default UserSection;