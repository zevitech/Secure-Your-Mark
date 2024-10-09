import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

export default function BlogCard({ heading, details, imageName }) {
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
          <h4 className="font-semibold text-large mb-2">{heading}</h4>
        </div>
        <small className="text-default-500">{details}</small>
      </CardHeader>
    </Card>
  );
}
