'use client';

export function ProductSpecGrid() {
  //use placeholder data for now
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="w-full pb-8 lg:pb-16 hidden lg:block">
          <p className="text-[#1A1A1A] font-black text-2xl md:text-3xl lg:text-5xl uppercase text-center tracking-[1.35px]">
            specification
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 gap-y-8 w-full pt-4 lg:pt-0">
          <div className="flex flex-row border-b border-[#E6E6E6] border-opacity-30 pb-2 md:pb-4">
            <p className="text-[#1A1A1A] text-lg md:text-xl font-bold capitalize">
              Model:
            </p>
            <p className="text-[#1A1A1A] text-base md:text-xl font-normal pl-2">
              CC-CN-07-J-GR
            </p>
          </div>
          <div className="flex flex-row border-b border-[#E6E6E6] border-opacity-30 pb-2 md:pb-4">
            <p className="text-[#1A1A1A] text-lg md:text-xl font-bold capitalize">
              Exterior:
            </p>
            <p className="text-[#1A1A1A] text-base md:text-xl font-normal pl-2 capitalize">
              Polyester
            </p>
          </div>
          <div className="flex flex-row border-b border-[#E6E6E6] border-opacity-30 pb-2 md:pb-4">
            <p className="text-[#1A1A1A] text-lg md:text-xl font-bold capitalize">
              Item Weight:
            </p>
            <p className="text-[#1A1A1A] text-base md:text-xl font-normal pl-2">
              2.2 Pounds
            </p>
          </div>
          <div className="flex flex-row border-b border-[#E6E6E6] border-opacity-30 pb-2 md:pb-4">
            <p className="text-[#1A1A1A] text-lg md:text-xl font-bold capitalize">
              Interior:
            </p>
            <p className="text-[#1A1A1A] text-base md:text-xl font-normal pl-2 capitalize">
              Fleece
            </p>
          </div>
          <div className="flex flex-row border-b border-[#E6E6E6] border-opacity-30 pb-2 md:pb-4">
            <p className="text-[#1A1A1A] text-lg md:text-xl font-bold capitalize">
              Product Dimensions:
            </p>
            <p className="text-[#1A1A1A] text-base md:text-xl font-normal pl-2">
              18 x 15 x 8 inch
            </p>
          </div>
          <div className="hidden lg:flex flex-row border-b border-[#E6E6E6] border-opacity-30 pb-2 md:pb-4">
            <p className="text-[#1A1A1A] text-lg md:text-xl font-bold capitalize"></p>
            <p className="text-[#1A1A1A] text-base md:text-xl font-normal pl-2"></p>
          </div>
        </div>
      </div>
    </>
  );
}
