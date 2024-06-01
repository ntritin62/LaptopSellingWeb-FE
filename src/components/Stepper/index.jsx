import React from 'react';
import {
  Stepper,
  Step,
  CardHeader,
  Typography,
} from '@material-tailwind/react';

export function CustomStepper({ activeStep }) {
  return (
    <div className="w-full py-6 px-10 sm:p-0 sm:t sm:text-base">
      <CardHeader
        floated={false}
        variant="gradient"
        color="white"
        className="grid h-24 m-0 place-items-center"
      >
        <div className="w-full px-20 pt-4 pb-8">
          <Stepper
            activeStep={activeStep}
            lineClassName="#ccc"
            activeLineClassName="bg-gradient-to-r from-green-400 to-blue-500"
          >
            <Step
              className="h-4 w-4 bg-[#ccc] text-[#ccc] cursor-pointer"
              activeClassName="ring-0 bg-gradient-to-r from-green-400 to-blue-500 text-[#065F46]"
              completedClassName="bg-[#D1FAE5] text-[#0cd39b]"
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h4">Đang xác nhận</Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 bg-[#ccc] text-[#ccc] cursor-pointer"
              activeClassName="ring-0 bg-gradient-to-r from-green-400 to-blue-500 text-[#065F46]"
              completedClassName="bg-[#D1FAE5] text-[#0cd39b]"
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h4">Đã thanh toán</Typography>
              </div>
            </Step>

            <Step
              className="h-4 w-4 bg-[#ccc] text-[#ccc] cursor-pointer"
              activeClassName="ring-0 bg-gradient-to-r from-green-400 to-blue-500  text-[#065F46]"
              completedClassName="bg-[#D1FAE5] text-[#0cd39b]"
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h4">Đang giao</Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 bg-[#ccc] text-[#ccc] cursor-pointer"
              activeClassName="ring-0 bg-gradient-to-r from-green-400 to-blue-500  text-[#065F46]"
              completedClassName="bg-[#D1FAE5] text-[#0cd39b]"
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h4">Đã giao</Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 bg-[#ccc] text-[#ccc] cursor-pointer"
              activeClassName="ring-0 bg-gradient-to-r from-green-400 to-blue-500  text-[#065F46]"
              completedClassName="bg-[#D1FAE5] text-[#0cd39b]"
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h4">Đã huỷ</Typography>
              </div>
            </Step>
          </Stepper>
        </div>
      </CardHeader>
    </div>
  );
}
