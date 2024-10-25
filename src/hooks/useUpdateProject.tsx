import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProjectState, UpdateProjectPayload, Flow, Tools, ToolValues, Credential, Project } from '../shared/types';
import { updateProjectAttributeLocally } from '../entitles/projects/projectSlice';

export const useUpdateProject = () => {
  const dispatch = useDispatch();

  // Selector to get project state
  const state: ProjectState = useSelector((state: { project: ProjectState }) => state.project);
 
  // Utility to update any project attribute
  const updateProjectAttribute = useCallback(
    <T extends keyof Project>({ projectId, attribute, value }: { projectId: number; attribute: T; value: Project[T] }) => {
      const project = state.projects.find((p) => p.id === projectId);

      if (!project) {
        console.warn(`Project with id ${projectId} not found`);
        return;
      }

      const payload: UpdateProjectPayload = {
        id: projectId,
        updates: { [attribute]: value } as Partial<Project>,
      };
      dispatch(updateProjectAttributeLocally(payload));
    },
    [dispatch, state]
  );

  // CRUD for Flow
  const addFlow = useCallback((projectId: number, newFlow: Flow) => {
    const project = state.projects.find((p) => p.id === projectId);
    updateProjectAttribute({
      projectId,
      attribute: 'flow',
      value: [...(project?.flow || []), newFlow],
    });
  }, [updateProjectAttribute, state]);

  const updateFlow = useCallback((projectId: number, flowId: string, updatedFlow: Partial<Flow>) => {
    const project = state.projects.find((p) => p.id === projectId);
    const updatedFlows = project?.flow.map((f) => (f.source === flowId ? { ...f, ...updatedFlow } : f)) || [];
    updateProjectAttribute({ projectId, attribute: 'flow', value: updatedFlows });
  }, [updateProjectAttribute, state]);

  const deleteFlow = useCallback((projectId: number, flowId: string) => {
    const project = state.projects.find((p) => p.id === projectId);
    const updatedFlows = project?.flow.filter((f) => f.source !== flowId) || [];
    updateProjectAttribute({ projectId, attribute: 'flow', value: updatedFlows });
  }, [updateProjectAttribute, state]);

  // CRUD for Tools
  const addTool = useCallback((projectId: number, newTool: Tools) => {
    const project = state.projects.find((p) => p.id === projectId);
    updateProjectAttribute({ projectId, attribute: 'tools', value: [...(project?.tools || []), newTool] });
  }, [updateProjectAttribute, state]);

  const updateTool = useCallback((projectId: number, toolId: string, updatedTool: Partial<Tools>) => {
    const project = state.projects.find((p) => p.id === projectId);
    const updatedTools = project?.tools.map((t) => (t.id === toolId ? { ...t, ...updatedTool } : t)) || [];
    updateProjectAttribute({ projectId, attribute: 'tools', value: updatedTools });
  }, [updateProjectAttribute, state]);

  const deleteTool = useCallback((projectId: number, toolId: string) => {
    const project = state.projects.find((p) => p.id === projectId);
    const updatedTools = project?.tools.filter((t) => t.id !== toolId) || [];
    updateProjectAttribute({ projectId, attribute: 'tools', value: updatedTools });
  }, [updateProjectAttribute, state]);

  // CRUD for ToolValues
  const addToolValue = useCallback((projectId: number, newToolValue: ToolValues) => {
    const project = state.projects.find((p) => p.id === projectId);
    updateProjectAttribute({ projectId, attribute: 'valueIds', value: [...(project?.valueIds || []), newToolValue] });
  }, [updateProjectAttribute, state]);

  const updateToolValue = useCallback((projectId: number, valueId: string, updatedValue: Partial<ToolValues>) => {
    const project = state.projects.find((p) => p.id === projectId);
    const updatedValues = project?.valueIds.map((v) => (v.id === valueId ? { ...v, ...updatedValue } : v)) || [];
    updateProjectAttribute({ projectId, attribute: 'valueIds', value: updatedValues });
  }, [updateProjectAttribute, state]);

  const deleteToolValue = useCallback((projectId: number, valueId: string) => {
    const project = state.projects.find((p) => p.id === projectId);
    const updatedValues = project?.valueIds.filter((v) => v.id !== valueId) || [];
    updateProjectAttribute({ projectId, attribute: 'valueIds', value: updatedValues });
  }, [updateProjectAttribute, state]);

  // CRUD for Credentials
  const addCredential = useCallback((projectId: number, newCredential: Credential) => {
    const project = state.projects.find((p) => p.id === projectId);
    updateProjectAttribute({ projectId, attribute: 'credentials', value: [...(project?.credentials || []), newCredential] });
  }, [updateProjectAttribute, state]);

  const updateCredential = useCallback((projectId: number, credentialId: number, updatedCredential: Partial<Credential>) => {
    const project = state.projects.find((p) => p.id === projectId);
    const updatedCredentials = project?.credentials.map((c) => (c.id === credentialId ? { ...c, ...updatedCredential } : c)) || [];
    updateProjectAttribute({ projectId, attribute: 'credentials', value: updatedCredentials });
  }, [updateProjectAttribute, state]);

  const deleteCredential = useCallback((projectId: number, credentialId: number) => {
    const project = state.projects.find((p) => p.id === projectId);
    const updatedCredentials = project?.credentials.filter((c) => c.id !== credentialId) || [];
    updateProjectAttribute({ projectId, attribute: 'credentials', value: updatedCredentials });
  }, [updateProjectAttribute, state]);

  // CRUD for Contributors
  const addContributor = useCallback((projectId: number, newContributor: Project['contributors'][number]) => {
    const project = state.projects.find((p) => p.id === projectId);
    updateProjectAttribute({ projectId, attribute: 'contributors', value: [...(project?.contributors || []), newContributor] });
  }, [updateProjectAttribute, state]);

  const updateContributor = useCallback((projectId: number, contributorName: string, updatedContributor: Partial<Project['contributors'][number]>) => {
    const project = state.projects.find((p) => p.id === projectId);
    const updatedContributors = project?.contributors.map((c) => (c.firstName === contributorName ? { ...c, ...updatedContributor } : c)) || [];
    updateProjectAttribute({ projectId, attribute: 'contributors', value: updatedContributors });
  }, [updateProjectAttribute, state]);

  const deleteContributor = useCallback((projectId: number, contributorName: string) => {
    const project = state.projects.find((p) => p.id === projectId);
    const updatedContributors = project?.contributors.filter((c) => c.firstName !== contributorName) || [];
    updateProjectAttribute({ projectId, attribute: 'contributors', value: updatedContributors });
  }, [updateProjectAttribute, state]);

  // Single attribute updates
  const updateName = useCallback((projectId: number, newName: string) => {
    updateProjectAttribute({ projectId, attribute: 'name', value: newName });
  }, [updateProjectAttribute]);

  const updateDescription = useCallback((projectId: number, newDescription: string) => {
    updateProjectAttribute({ projectId, attribute: 'description', value: newDescription });
  }, [updateProjectAttribute]);

  const updateStatus = useCallback((projectId: number, newStatus: Project['status']) => {
    updateProjectAttribute({ projectId, attribute: 'status', value: newStatus });
  }, [updateProjectAttribute]);

  return {
    updateProjectAttribute,
    addFlow,
    updateFlow,
    deleteFlow,
    addTool,
    updateTool,
    deleteTool,
    addToolValue,
    updateToolValue,
    deleteToolValue,
    addCredential,
    updateCredential,
    deleteCredential,
    addContributor,
    updateContributor,
    deleteContributor,
    updateName,
    updateDescription,
    updateStatus,
  };
};
