import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

export default function AttorneyCard({ name, details, imageName, flag }) {
  return (
    <Card className="py-4 max-w-72">
      <CardBody className="overflow-visible py-0">
        <Image
          alt="Attorney Picture"
          className="object-cover rounded-xl hover:animate-appearance-in"
          src={`/images/${imageName}`}
          width={270}
          height={300}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="flex items-center gap-4">
          <h4 className="font-semibold text-large mb-2">{name}</h4>
          <Image
            alt="Flag"
            src={`/images/${flag}`}
            width={25}
            height={20}
            className=" rounded-sm"
          />
        </div>
        <small className="text-default-500">{details}</small>
        <Button color="primary" className="w-full py-2 mt-5">
          {`Learn More >`}
        </Button>
      </CardHeader>
    </Card>
  );
}
