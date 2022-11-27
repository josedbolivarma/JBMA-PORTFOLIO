import { IoIosArrowDown } from "react-icons/io";

type Props = {
  Icon: React.ReactElement;
  title: string;
  date: string;
  skills: { name: string; percent: number }[];
};

export const Accordion = ({ Icon, title, date, skills }: Props) => {
  return (
    <div className="relative overflow-hidden w-full md:w-[400px] pl-5">
      <input
        type="checkbox"
        className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
      />
      <div className="h-12 w-full flex justify-start items-center gap-5">
        {Icon}
        <div className="flex flex-col justify-center">
          <h2 className="text-lg md:text-2xl font-semibold text-white">
            {title}
          </h2>
          <h3>More than {date} years</h3>
        </div>
      </div>

      {/* Arrow Icon */}
      <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
        <IoIosArrowDown size={30} />
      </div>

      {/* Content */}
      <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-96">
        <div className="p-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between my-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  {skill.name}
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  {skill.percent}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-blue-900 h-2.5 rounded-full"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
