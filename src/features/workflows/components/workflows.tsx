"use client";

import { EntityContainer, EntityHeader } from "@/components/entity-component";
import { useSuspenseWorkflow, useWorkflow } from "../hooks/use-workflow";
import { toast } from "sonner";

export const WorkflowList = () => {
  const workflows = useSuspenseWorkflow();

  return <p>{JSON.stringify(workflows.data, null, 2)}</p>;
};

export const WorkflowHeader = ({ disabled }: { disabled?: boolean }) => {
  const workflows = useWorkflow();

  const handleNewWorkflow = () => {
    workflows.mutate(undefined, {
      onError: (error) => {
        toast.error(`Failed to create workflow: ${error.message}`);
      },
    });
  };

  return (
    <>
      <EntityHeader
        title="Workflows"
        description="Create and manage workflows"
        onNew={handleNewWorkflow}
        newButtonLabel="New workflow"
        disabled={disabled}
        isCreating={false}
      />
    </>
  );
};

export const WorkflowsContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <EntityContainer
      header={<WorkflowHeader />}
      search={<></>}
      pagination={<></>}
    >
      {children}
    </EntityContainer>
  );
};
