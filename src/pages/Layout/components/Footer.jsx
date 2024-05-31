import { Typography } from '@material-tailwind/react';

export function Footer() {
  return (
    <footer className=" mt-[150px] w-full bg-white p-[30px]">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center ">
        <img src="/images/logo.png" alt="logo-ct" className="w-[150px]" />
        <ul className="flex flex-wrap jus items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-primary focus:text-primary text-2xl"
            >
              Về chúng tôi
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-primary focus:text-primary text-2xl"
            >
              Hỗ trợ
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-primary focus:text-primary text-2xl"
            >
              Liên hệ
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography
        color="blue-gray"
        className="text-center font-normal text-2xl"
      >
        &copy; 2024 T-Laptop.com
      </Typography>
    </footer>
  );
}
