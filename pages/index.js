import BottomMenuBar from "../components/BottomMenuBar"

export default function Home() {
  var tempData = {
    name: "Nasi bebek pak gembus",
    thumbnail_url: "https://d1sag4ddilekf6.azureedge.net/cuisine/126/icons/upload-photo-icon_def16ffb4b3d46f69e8b8f0d06b1636a_1549032957895751657.jpeg"
  }

  var dummyData = [
    tempData, tempData, tempData, tempData, tempData, tempData, tempData, tempData,
  ]

  return (
    <div className="bg-[#f1faee]">
      <div className="bg-[#457b9d] px-3 py-2 mb-3">
        <div className="container mx-auto max-w-[1040px] flex flex-col">
          <b className="text-white"><i className="fa-solid fa-apple-whole"></i> Makan<span className="text-[#a8dadc]">nn</span></b>
          <small className="text-white mt-[-5px]">Aplikasi aggregasi restoran</small>
        </div>
      </div>


      <div className="container mx-auto max-w-[1040px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {dummyData.map((oneData) => (
            <div className="flex justify-center px-1 mb-5 mx-2">
              <div className="flex flex-col relative rounded-lg shadow-xl">
                <a className="absolute top-0 p-2 text-white w-full">
                  <div className={`flex justify-end text-sm text-[#a8dadc]`}>
                    <b className="text-[#fca311]"><i className="fa-solid fa-star"></i> 4.5</b>
                  </div>
                </a>

                <div>
                  <img src={oneData.thumbnail_url} className="w-full h-[195px] rounded-t-lg object-cover" />
                </div>

                <a className="absolute top-[162px] p-2 text-white w-full">
                  <div className="flex justify-between">
                    <div className={`flex text-sm text-[#a8dadc]`}>
                      <img src="/images/gojek.png" className="h-[18px] w-[18px] mt-1 border rounded-full bg-white" />
                      <img src="/images/grab.png" className="h-[18px] w-[18px] ml-1 mt-1 border rounded-full bg-white" />
                      <img src="/images/shopee.ico" className="h-[18px] w-[18px] ml-1 mt-1 border rounded-full bg-white" />
                      <img src="/images/traveloka.png" className="h-[18px] w-[18px] ml-1 mt-1 border rounded-full bg-white" />
                    </div>
                    <div className="">
                      <small className="p-[4px] bg-black rounded-lg bg-opacity-60"><small><i className="fa fa-location-dot"></i> 100 Km</small></small>
                    </div>
                  </div>
                </a>

                <div className="bg-[#e63946] text-[#f1faee] rounded-b-lg p-2">
                  <span>{oneData.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomMenuBar />
    </div>
  )
}
