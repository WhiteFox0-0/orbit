interface PageProps {
  params: Promise<{
    workflowId: string;
  }>;
}

async function page({ params }: PageProps) {
  const { workflowId } = await params;

  return <div>Workflow Id: {workflowId}</div>;
}

export default page;
