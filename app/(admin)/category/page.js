import { Category } from "@/components";

export default function page() {
  const tags = [
    {
      id: 1,
      name: "هندسة الإكترونيات وإتصالات",
      description: "Elecronic and Communication Engg",
    },
    {
      id: 2,
      name: "هندسة كهرباء",
      description: "Electricity Engineering",
    },
    {
      id: 3,
      name: "هندسة مدني",
      description: "Civil Engineering",
    },
    {
      id: 4,
      name: "هندسة ميكانيك",
      description: "Mechanical Engineering",
    },
    {
      id: 5,
      name: "هندسة معمارية",
      description: "Architectural Engineering",
    },
    {
      id: 6,
      name: "هندسة بحرية",
      description: "Marine engineering",
    },
    {
      id: 7,
      name: "هندسة تقنية معلومات",
      description: "Information Technology Engg",
    },
    {
      id: 8,
      name: "هندسة مهارات كمبيوتر",
      description: "Computer Skills Engineering",
    },
    {
      id: 9,
      name: "هندسة صناعة وإنتاج",
      description: "Industry and production engineering",
    },

  ];

  return (
    <div className="m-auto p-2 sm:p-4 flex flex-col items-center w-screen justify-center">
      <div className="flex w-full flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 selection:bg-blue-700 selection:text-white">
          {
            tags.map(({ id, name, description }) =>
              <Category
                key={id}
                id={id}
                name={name}
                description={description}
              />
            )
          }
        </div>
      </div>
    </div>
  )
}