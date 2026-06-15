"use client";

import { EntityContainer, EntityHeader, EntitySearch } from "@/components/entity-component";
import { useSuspenseWorkflow, useWorkflow } from "../hooks/use-workflow";
import { toast } from "sonner";
import { useWorkflowParams } from "../hooks/use-workflows-param";
import { useEntitySearch } from "@/hooks/use-entity-search";
import { EntityPagination } from "@/components/entity-component";

export const WorkflowsSearch = () => {
  const [params, setParams] = useWorkflowParams();
  const { searchValue, onSearchChange } = useEntitySearch({
    params,
    setParams,
  });

  return (
    <EntitySearch
      value={searchValue}
      onChange={onSearchChange}
      placeholder="Search workflows"
    />
  );
};

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

export const WorkflowsPagination = () => {
  const workflows = useSuspenseWorkflow();
  const [params, setParams] = useWorkflowParams();

  return (
    <EntityPagination
      disabled={workflows.isFetching}
      totalPages={workflows.data.totalPage}
      page={workflows.data.page}
      onPageChange={(page) => setParams({ ...params, page })}
    />
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
      search={<WorkflowsSearch />}
      pagination={<WorkflowsPagination />}
    >
      {children}
    </EntityContainer>
  );
};
