function AboutUs() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Zoopark Tirana is a public zoo located in Tirana, Albania. It is
              the only zoo of its kind in the country. Built during 1960–1961,
              the zoo is concentrated in an area of 6.09 ha (15.0 acres) in the
              southern part of the city, between the Grand Park and the
              Botanical Gardens.
            </p>
          </div>
          <div className="mt-12 md:mt-0">
            <img src="https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2023/03/25080325/shutterstock_1746091181-1024x681.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
