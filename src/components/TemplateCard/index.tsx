import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import EtherIcon from '@/../public/images/ether.png';
import CoinIcon from '@/../public/images/coin.png';
import Link from "next/link";
export default function TemplateCard({
  type
}: {
  type: string
}) {
  return <Card className=" shadow-lg">
    <CardBody className="pt-0">
      <div className="w-1/2 text-center text-black p-[6px] bg-[#EEF2FA] rounded-b-xl mx-auto">
        Base
      </div>
      <Typography variant="h5" color="blue-gray" className="mt-6">
        Double Pts
      </Typography>
      <div className="mt-3 flex divide-x-[1px]">
        <div className="flex items-center pr-2">
          <img src={EtherIcon.src} alt="" className="h-4 w-4 mr-2" />
          <p>Ether.Fi</p>
        </div>
        <div className="flex items-center pl-2">
          <img src={CoinIcon.src} alt="" className="h-4 w-4 mr-2" />
          <p>Stargate</p>
        </div>
      </div>
      {
        type === 'points' ? (<hr className="my-6" />) : (
          <p className="bg-[#EEF2FA] p-3 rounded-xl text-sm mt-6">
            Self catered, Purpose Built Contract, Leveraged
          </p>
        )
      }
      <div className="flex justify-between mt-3">
        <div>Rewards</div>
        <div className="text-capstackBlue font-bold">20% APY</div>
      </div>
      <div className="flex flex-wrap gap-1 mt-3">
        <Chip variant="ghost" value="Defi" className="rounded-full" />
        <Chip variant="ghost" value="Bridge" className="rounded-full" />
      </div>
    </CardBody>
    <CardFooter className="pt-0 grid grid-cols-2 gap-3">
      <Link href={`/template?id=123123&type=${type}&action=Deposit`}>
        <Button variant="outlined" className="w-full font-normal border-capstackBlue text-capstackBlue hover:bg-capstackBlue hover:text-white">
          Enter
        </Button>
      </Link>
      <Link href={`/template?id=123123&type=${type}&action=Withdraw`}>
        <Button variant="outlined" className="w-full font-normal border-capstackBlue text-capstackBlue hover:bg-capstackBlue hover:text-white">
          Exit
        </Button>
      </Link>
    </CardFooter>
  </Card>
}