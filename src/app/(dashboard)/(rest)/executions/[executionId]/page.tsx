interface PageProps {
  params: Promise<{
    executionId: string;
  }>
}

async function page({ params }: PageProps) {
  const { executionId } = await params

  return (
    <div>Execution Id: {executionId}</div>
  )
}

export default page

