export default function Home() {
  return (
    <main>
        <div className="justify-center items-center bg-gray-50 flex flex-col px-20 max-md:px-5">
      <div className="w-full max-w-[1115px] mt-20 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[61%] max-md:w-full max-md:ml-0">
            <div className="flex grow justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <div className="items-center bg-zinc-100 flex aspect-square flex-col p-3 rounded-md">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7182aa66-f744-4356-b924-85360a51ee02?apiKey=a7dadb0aada3448faa2da158e3dfe978&"
                  className="aspect-square object-contain object-center w-[21px] fill-black overflow-hidden"
                />
              </div>
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                <div className="text-black text-4xl font-bold leading-10 tracking-wide whitespace-nowrap max-md:max-w-full">
                  <span className="font-bold text-neutral-800">VMS</span>
                  <span className="font-medium text-neutral-800">
                    {" "}
                    / Cameras /{" "}
                  </span>
                  <span className="font-medium text-black">Camera Details</span>
                </div>
                <div className="text-black text-opacity-50 text-xs leading-6 tracking-wide capitalize mt-1.5 max-md:max-w-full">
                  Bank Entrance-front-view Camera1
                </div>
                <div className="text-black text-sm leading-6 tracking-wide whitespace-nowrap mt-3 max-md:max-w-full">
                  View and manage camera details, recordings and connection
                  details
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex gap-5 max-md:justify-center max-md:mt-10">
              <div className="text-zinc-800 text-center text-sm font-medium leading-5 tracking-normal whitespace-nowrap justify-center items-stretch grow px-5 py-3.5 rounded-lg border-[1.4px] border-solid border-zinc-800 max-md:px-px">
                Edit Camera
              </div>
              <div className="text-zinc-800 text-center text-sm font-medium leading-5 tracking-normal whitespace-nowrap justify-center items-center grow px-5 py-3.5 rounded-lg border-[1.4px] border-solid border-zinc-800">
                Deactivate
              </div>
              <div className="text-red-600 text-center text-sm font-medium leading-5 tracking-normal whitespace-nowrap justify-center items-stretch grow px-3.5 py-3.5 rounded-lg border-[1.4px] border-solid border-red-600">
                Delete Camera
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center rounded border border-[color:var(--gray-divider,#E5E5E5)] bg-white flex w-full max-w-[1115px] flex-col mt-9 mb-20 pt-9 pb-12 px-6 border-solid max-md:max-w-full max-md:mb-10 max-md:px-5">
        <div className="items-stretch flex w-[439px] max-w-full gap-3 pr-3.5 self-start max-md:flex-wrap">
          <div className="justify-between items-stretch bg-zinc-100 flex gap-2.5 px-6 py-3 rounded-lg max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebe13e8d-a67c-410f-b493-d5c485f5e430?apiKey=a7dadb0aada3448faa2da158e3dfe978&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-neutral-800 text-sm font-medium leading-6 tracking-wide whitespace-nowrap">
              View Recorded Videos
            </div>
          </div>
          <div className="justify-between items-stretch bg-zinc-100 flex gap-2.5 px-6 py-3 rounded-lg max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/63104eb0-5864-4f68-a5d5-196302789620?apiKey=a7dadb0aada3448faa2da158e3dfe978&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-neutral-800 text-sm font-medium leading-6 tracking-wide whitespace-nowrap">
              Refetch Camera
            </div>
          </div>
        </div>
        <div className="self-stretch mt-8 pr-3.5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
              <div className="flex-col overflow-hidden relative flex min-h-[337px] grow items-stretch pt-12 pb-3.5 px-5 max-md:max-w-full max-md:mt-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e6ffcce7-8fb2-4c12-85b9-56c5030e4754?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ffcce7-8fb2-4c12-85b9-56c5030e4754?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ffcce7-8fb2-4c12-85b9-56c5030e4754?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ffcce7-8fb2-4c12-85b9-56c5030e4754?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ffcce7-8fb2-4c12-85b9-56c5030e4754?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ffcce7-8fb2-4c12-85b9-56c5030e4754?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ffcce7-8fb2-4c12-85b9-56c5030e4754?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ffcce7-8fb2-4c12-85b9-56c5030e4754?apiKey=a7dadb0aada3448faa2da158e3dfe978&"
                  className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                />
                <div className="relative items-stretch flex justify-between gap-5 mt-64 max-md:max-w-full max-md:flex-wrap max-md:mr-0.5 max-md:mt-10">
                  <div className="text-white text-sm font-semibold leading-4 tracking-normal">
                    01/05/2023 02:42:21 PM
                  </div>
                  <div className="text-white text-sm font-semibold leading-4 tracking-normal whitespace-nowrap">
                    Hall 01
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center border border-[color:var(--gray-divider,#E5E5E5)] bg-white flex grow flex-col w-full mx-auto pt-6 pb-12 px-6 rounded-md border-solid max-md:max-w-full max-md:mt-5 max-md:px-5">
                <div className="justify-between self-stretch flex gap-5">
                  <div className="text-black text-xl font-semibold leading-5 tracking-normal">
                    Camera Details
                  </div>
                  <div className="text-white text-xs font-semibold leading-4 tracking-wide whitespace-nowrap justify-center items-stretch rounded bg-green-500 bg-opacity-90 self-stretch aspect-[2.409090909090909] px-2 py-1">
                    Active
                  </div>
                </div>
                <div className="items-stretch self-stretch flex flex-col mt-6">
                  <div className="items-center flex justify-between gap-2.5">
                    <div className="text-neutral-800 text-sm font-semibold leading-4 tracking-normal my-auto">
                      Location:
                    </div>
                    <div className="text-neutral-500 text-sm leading-5 tracking-normal self-stretch whitespace-nowrap">
                      Coimbatore
                    </div>
                  </div>
                  <div className="items-stretch flex justify-between gap-2.5 mt-3">
                    <div className="text-neutral-800 text-sm font-semibold leading-4 tracking-normal">
                      City:
                    </div>
                    <div className="text-neutral-500 text-sm leading-4 tracking-normal whitespace-nowrap">
                      Coimbatore
                    </div>
                  </div>
                  <div className="items-stretch flex justify-between gap-2.5 mt-3">
                    <div className="text-neutral-800 text-sm font-semibold leading-4 tracking-normal">
                      Timezone:
                    </div>
                    <div className="text-neutral-500 text-sm leading-4 tracking-normal whitespace-nowrap">
                      Delhi-India
                    </div>
                  </div>
                  <div className="items-stretch flex justify-between gap-2.5 mt-3">
                    <div className="text-neutral-800 text-sm font-semibold leading-4 tracking-normal">
                      Date added:
                    </div>
                    <div className="text-neutral-500 text-sm leading-4 tracking-normal whitespace-nowrap">
                      Aug 03, 2023 12:01:42 PM
                    </div>
                  </div>
                  <div className="items-stretch flex justify-between gap-2.5 mt-3">
                    <div className="text-neutral-800 text-sm font-semibold leading-4 tracking-normal">
                      Last update:
                    </div>
                    <div className="text-neutral-500 text-sm leading-4 tracking-normal whitespace-nowrap">
                      Aug 03, 2023 12:01:42 PM
                    </div>
                  </div>
                </div>
                <div className="items-stretch flex w-[168px] max-w-full flex-col mt-6 mb-4">
                  <div className="items-center flex justify-between gap-2.5">
                    <div className="text-neutral-800 text-sm font-semibold leading-4 tracking-normal my-auto">
                      Manufacture details:
                    </div>
                    <div className="text-neutral-500 text-sm leading-5 tracking-normal self-stretch whitespace-nowrap">
                      ADT
                    </div>
                  </div>
                  <div className="items-stretch flex justify-between gap-2.5 mt-3">
                    <div className="text-neutral-800 text-sm font-semibold leading-4 tracking-normal">
                      RTSP/HLS URL:
                    </div>
                    <div className="text-blue-800 text-sm leading-4 tracking-normal underline whitespace-nowrap">
                      Copy URL
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-stretch self-stretch flex flex-col mt-8 max-md:max-w-full">
          <div className="text-black text-xl font-semibold leading-6 tracking-wide whitespace-nowrap max-md:max-w-full">
            Camera Health and Alert
          </div>
          <div className="mt-5 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <div className="justify-center border border-[color:var(--gray-divider,#E5E5E5)] bg-white flex grow flex-col w-full mx-auto pl-5 pr-20 py-5 rounded-md border-solid max-md:mt-7 max-md:px-5">
                  <div className="text-neutral-800 text-sm font-semibold leading-4 tracking-normal whitespace-nowrap">
                    Offline Alert
                  </div>
                  <div className="text-neutral-500 text-sm leading-4 tracking-normal whitespace-nowrap mt-3">
                    If camera is continuously offline for
                  </div>
                  <div className="text-neutral-800 text-xl font-medium leading-6 tracking-normal whitespace-nowrap mt-3">
                    12 minutes
                  </div>
                  <div className="items-stretch flex w-[207px] max-w-full flex-col mt-3">
                    <div className="text-neutral-500 text-sm leading-4 tracking-normal whitespace-nowrap">
                      Send an email to
                    </div>
                    <div className="text-neutral-800 text-sm font-semibold leading-4 tracking-normal whitespace-nowrap mt-1.5">
                      email.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center items-stretch border border-[color:var(--gray-divider,#E5E5E5)] bg-white flex grow flex-col w-full mx-auto pl-5 pr-20 py-4 rounded-md border-solid max-md:mt-7 max-md:px-5">
                  <div className="text-neutral-800 text-sm font-semibold leading-4 tracking-normal whitespace-nowrap">
                    Health Grade
                  </div>
                  <div className="text-neutral-800 text-3xl font-medium leading-8 tracking-normal whitespace-nowrap mt-3">
                    96%
                  </div>
                  <div className="items-stretch flex flex-col mt-3">
                    <div className="text-neutral-500 text-sm leading-5 tracking-normal">
                      Cheers, this camera had no offline time in the last 30
                      days
                    </div>
                    <div className="text-green-500 text-sm font-semibold leading-4 tracking-normal whitespace-nowrap mt-1.5">
                      Grade A
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center border border-[color:var(--gray-divider,#E5E5E5)] bg-white flex grow flex-col w-full mx-auto pl-5 pr-20 py-3.5 rounded-md border-solid max-md:mt-7 max-md:px-5">
                  <div className="text-neutral-800 text-sm font-semibold leading-4 tracking-normal whitespace-nowrap">
                    Health Logs
                  </div>
                  <div className="items-stretch flex w-[179px] max-w-full flex-col mt-3">
                    <div className="text-neutral-500 text-sm leading-4 tracking-normal whitespace-nowrap">
                      Today, 04:37 pm: Activated
                    </div>
                    <div className="text-neutral-500 text-sm leading-4 tracking-normal whitespace-nowrap mt-2">
                      23 Aug, 02:22 pm: Deactivated
                    </div>
                    <div className="text-neutral-500 text-sm leading-4 tracking-normal whitespace-nowrap mt-2">
                      21 Aug, 05:12 am: Activated
                    </div>
                    <div className="text-neutral-500 text-sm leading-4 tracking-normal whitespace-nowrap mt-2">
                      20 Aug, 02:12 am: Deactivated
                    </div>
                    <div className="text-neutral-500 text-sm leading-4 tracking-normal whitespace-nowrap mt-2">
                      19 Aug, 02:12 am: Deactivated
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-stretch self-stretch flex flex-col mt-8 max-md:max-w-full">
          <div className="justify-between items-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-black text-xl font-semibold leading-6 tracking-wide">
              Recent Recordings
            </div>
            <div className="text-neutral-700 text-base font-semibold leading-6 tracking-wide underline whitespace-nowrap">
              View All
            </div>
          </div>
          <div className="mt-5 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                <div className="justify-end items-stretch rounded border border-neutral-200 flex grow flex-col w-full mx-auto p-3 border-solid max-md:mt-4">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2728bbd9-57af-4c35-819c-5bf3794c267c?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2728bbd9-57af-4c35-819c-5bf3794c267c?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2728bbd9-57af-4c35-819c-5bf3794c267c?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2728bbd9-57af-4c35-819c-5bf3794c267c?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2728bbd9-57af-4c35-819c-5bf3794c267c?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2728bbd9-57af-4c35-819c-5bf3794c267c?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2728bbd9-57af-4c35-819c-5bf3794c267c?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2728bbd9-57af-4c35-819c-5bf3794c267c?apiKey=a7dadb0aada3448faa2da158e3dfe978&"
                    className="aspect-[1.37] object-contain object-center w-full overflow-hidden"
                  />
                  <div className="text-neutral-800 text-sm font-semibold leading-4 tracking-normal whitespace-nowrap mt-2.5">
                    Recording_0121
                  </div>
                  <div className="text-neutral-500 text-xs leading-4 tracking-normal whitespace-nowrap mt-1.5">
                    Today, 04:42 pm
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-end items-stretch rounded border border-neutral-200 flex grow flex-col w-full mx-auto p-3 border-solid max-md:mt-4">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a08220c7-96ba-4131-b56f-7801c185051e?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a08220c7-96ba-4131-b56f-7801c185051e?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a08220c7-96ba-4131-b56f-7801c185051e?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a08220c7-96ba-4131-b56f-7801c185051e?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a08220c7-96ba-4131-b56f-7801c185051e?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a08220c7-96ba-4131-b56f-7801c185051e?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a08220c7-96ba-4131-b56f-7801c185051e?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a08220c7-96ba-4131-b56f-7801c185051e?apiKey=a7dadb0aada3448faa2da158e3dfe978&"
                    className="aspect-[1.37] object-contain object-center w-full overflow-hidden"
                  />
                  <div className="text-neutral-800 text-sm font-semibold leading-4 tracking-normal whitespace-nowrap mt-2.5">
                    Recording_0121
                  </div>
                  <div className="text-neutral-500 text-xs leading-4 tracking-normal whitespace-nowrap mt-1.5">
                    Today, 02:14 pm
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-end items-stretch rounded border border-neutral-200 flex grow flex-col w-full mx-auto p-3 border-solid max-md:mt-4">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d12a985f-042d-4bad-8eb8-81e2bd0d4c8b?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12a985f-042d-4bad-8eb8-81e2bd0d4c8b?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12a985f-042d-4bad-8eb8-81e2bd0d4c8b?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12a985f-042d-4bad-8eb8-81e2bd0d4c8b?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12a985f-042d-4bad-8eb8-81e2bd0d4c8b?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12a985f-042d-4bad-8eb8-81e2bd0d4c8b?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12a985f-042d-4bad-8eb8-81e2bd0d4c8b?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d12a985f-042d-4bad-8eb8-81e2bd0d4c8b?apiKey=a7dadb0aada3448faa2da158e3dfe978&"
                    className="aspect-[1.37] object-contain object-center w-full overflow-hidden"
                  />
                  <div className="text-neutral-800 text-sm font-semibold leading-4 tracking-normal whitespace-nowrap mt-2.5">
                    Recording_0121
                  </div>
                  <div className="text-neutral-500 text-xs leading-4 tracking-normal whitespace-nowrap mt-1.5">
                    Today, 02:09 pm
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-end items-stretch rounded border border-neutral-200 flex grow flex-col w-full mx-auto p-3 border-solid max-md:mt-4">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/29d3caf8-23f4-40e8-b08e-38aa48a28524?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/29d3caf8-23f4-40e8-b08e-38aa48a28524?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/29d3caf8-23f4-40e8-b08e-38aa48a28524?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/29d3caf8-23f4-40e8-b08e-38aa48a28524?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/29d3caf8-23f4-40e8-b08e-38aa48a28524?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/29d3caf8-23f4-40e8-b08e-38aa48a28524?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/29d3caf8-23f4-40e8-b08e-38aa48a28524?apiKey=a7dadb0aada3448faa2da158e3dfe978&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/29d3caf8-23f4-40e8-b08e-38aa48a28524?apiKey=a7dadb0aada3448faa2da158e3dfe978&"
                    className="aspect-[1.37] object-contain object-center w-full overflow-hidden"
                  />
                  <div className="text-neutral-800 text-sm font-semibold leading-4 tracking-normal whitespace-nowrap mt-2.5">
                    Recording_0121
                  </div>
                  <div className="text-neutral-500 text-xs leading-4 tracking-normal whitespace-nowrap mt-1.5">
                    Today, 01:11 pm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}
