export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src="/image copy 3.png" alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Game of Thrones lives on through legendary storytelling
            </h2>
            <p className="mt-6 text-gray-600">
              In the world of Westeros, power, loyalty, and betrayal shape the
              fate of kingdoms. From the icy North to the fiery South, noble
              houses rise and fall in pursuit of the Iron Throne, leaving behind
              a trail of honor, vengeance, and unforgettable legends.
            </p>
            <p className="mt-4 text-gray-600">
              The epic tale weaves through dragons, direwolves, and deep-rooted
              family feuds. Heroes and villains blur as each character carves
              their legacy in blood, fire, and steel—reminding us that in the
              game of thrones, you win or you die.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
