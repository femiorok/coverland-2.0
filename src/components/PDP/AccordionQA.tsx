import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function AccordionQA() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is putting this cover on a hassle?</AccordionTrigger>
        <AccordionContent>
          We make it simple and easy by making sure you get a cover tailor-made
          for your vehicle. With the right fit, putting it on is a breeze.
          Simply use our cover finder tool on the homepage to find the exact
          custom-fit car cover for your make and model. Once you insert the
          information, you will be directed to a page where you can choose from
          2 different options: standard versus premium. With over 120,000 car
          covers available, we have the exact custom-fit car cover for your
          vehicle, no matter the year, make, or model.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How durable is the cover?</AccordionTrigger>
        <AccordionContent>
          {`You're get unparalleled protection for your vehicle with our car
          cover, designed with guaranteed durability and exceptional quality.
          Crafted from premium materials, it ensures your car stays shielded
          from harsh weather, dust, and scratches. Our cover's robust
          construction promises long-lasting performance, adapting to various
          environmental challenges with ease.`}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>{`Will I get customer service?`}</AccordionTrigger>
        <AccordionContent>
          We make sure to guarantee your satisfaction with our exceptional
          customer service. At the heart of our commitment lies a dedication to
          understanding and fulfilling your needs with utmost precision and
          care. Our team of friendly, knowledgeable professionals is always
          ready to provide personalized assistance, ensuring a seamless and
          enjoyable experience.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
