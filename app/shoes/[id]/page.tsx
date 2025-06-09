// app/shoes/[id]/page.tsx or a similar path
// ✅ Server Component (can be async)
import { notFound } from "next/navigation"
import { getShoeById } from "@/lib/data"
import ShoeDetail from "@/components/ShoeDetail"

export default async function ShoeDetailPage({ params }: { params: { id: string } }) {
  const shoe = await getShoeById(params.id)

  if (!shoe) notFound()

  return <ShoeDetail shoe={shoe} />
}
