import { TProductData } from '@/lib/db';

export function extractUniqueValues(
  data: TProductData[] | null,
  data2?: TProductData[] | null
) {
  const generationStartSet = new Set<number>();
  const generationEndSet = new Set<number>();
  const uniqueSubmodel1Set = new Set<string>();
  const uniqueSubmodel2Set = new Set<string>();

  data?.forEach((item) => {
    if (item.generation_start) {
      generationStartSet.add(item.generation_start);
    }
    if (item.generation_end) {
      generationEndSet.add(item.generation_end);
    }
    if (item.submodel1) {
      uniqueSubmodel1Set.add(item.submodel1);
    }
    if (item.submodel2) {
      uniqueSubmodel2Set.add(item.submodel2);
    }
  });

  data2?.forEach((item) => {
    if (item.generation_start) {
      generationStartSet.add(item.generation_start);
    }
    if (item.generation_end) {
      generationEndSet.add(item.generation_end);
    }
    if (item.submodel1) {
      uniqueSubmodel1Set.add(item.submodel1);
    }
    if (item.submodel2) {
      uniqueSubmodel2Set.add(item.submodel2);
    }
  });
  const uniqueYears = Array.from(
    new Set([
      ...Array.from(generationStartSet),
      ...Array.from(generationEndSet),
    ])
  ).sort((a, b) => a - b);

  // Calculate year options based on the uniqueYears range
  const yearsOptions =
    uniqueYears.length > 0
      ? Array.from(
          {
            length: uniqueYears[uniqueYears.length - 1] - uniqueYears[0] + 1,
          },
          (_, i) => uniqueYears[0] + i
        )
      : [];

  return {
    yearsOptions,
    uniqueSubmodel1: Array.from(uniqueSubmodel1Set),
    uniqueSubmodel2: Array.from(uniqueSubmodel2Set),
  };
}

export function filterModelData(
  modelData: TProductData[],
  pathSegments: string[] | null
) {
  if (!pathSegments || pathSegments.length === 0) {
    return modelData;
  }

  const pathSegmentsSet = new Set(pathSegments);

  return modelData.filter(
    (car) =>
      pathSegmentsSet.has(car.make_slug as string) &&
      pathSegmentsSet.has(car.model_slug as string)
  );
}
