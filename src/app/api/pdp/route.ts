import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest } from 'next';
import { fetchPDPDataApi } from '@/lib/db';
import { Tables } from '@/lib/db/types';

const slugify = (str: string) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

function generateUrlFromRow(data: Tables<'Products'>[]) {
  // Check if data array is valid and has at least one object
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  // Extract the first object from the array
  const obj = data[0];

  // Destructure the necessary fields from the object
  const { make, model, year_generation, submodel1 } = obj;

  // Construct the URL
  let url = `/car-covers/${slugify(make)}/${slugify(model)}/${slugify(
    year_generation
  )}`;

  // Add the submodel query parameter if it exists
  if (submodel1) {
    url += `?submodel=${encodeURIComponent(slugify(submodel1))}`;
  }

  return url;
}

export async function POST(req: NextRequest) {
  const { generation_default } = await req.json();
  const pdpData = await fetchPDPDataApi(generation_default);
  const url = pdpData && generateUrlFromRow(pdpData);
  return url
    ? NextResponse.redirect(new URL(url, req.url), 303)
    : NextResponse.json({ error: 'Not found' }, { status: 404 });
}
