import gql from 'graphql-tag';

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: ProductInput!) {
    createProduct(input: $input) {
      product {
        name
        shortDescription
        website
      }
      error
    }
  }
`;

export const CREATE_TASK = gql`
  mutation CreateTask($input: TaskInput!) {
    createTask(input: $input) {
      task {
        title
      }
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation UpdateTask($input: TaskInput!, $id: Int!) {
    updateTask(input: $input, id: $id) {
      task {
        title
      }
    }
  }
`;

export const CREATE_CODE_REPOSITORY = gql`
  mutation CreateCodeRepository($input: CodeRepositoryInput!) {
    createCodeRepository(input: $input) {
      repository {
        id
        repository
      }
    }
  }
`;

export const CREATE_CAPABILITY = gql`
  mutation CreateCapability($input: CapabilityInput!) {
    createCapability(input: $input) {
      capability {
        id
        name
        parent {
          id
          name
          product {
            id
            slug
          }
        }
        product {
          id
          slug
        }
      }
    }
  }
`;

export const UPDATE_CAPABILITY = gql`
  mutation UpdateCapability($input: CapabilityInput!, $id: Int!) {
    updateCapability(input: $input, id: $id) {
      capability {
        id
        name
        parent {
          id
          name
          product {
            id
            slug
          }
        }
        product {
          id
          slug
        }
      }
    }
  }
`;

export const DELETE_CAPABILITY = gql`
  mutation DeleteCapability($id: Int!) {
    deleteCapability(id: $id) {
      capabilityId
      status
    }
  }
`;

export const CREATE_INITIATIVE = gql`
  mutation CreateInitiative($input: InitiativeInput!) {
    createInitiative(input: $input) {
      initiative {
        id
      }
    }
  }
`;

export const UPDATE_INITIATIVE = gql`
  mutation UpdateInitiative($input: InitiativeInput!, $id: Int!) {
    updateInitiative(input: $input, id: $id) {
      initiative {
        id
      }
    }
  }
`;

export const DELETE_INITIATIVE = gql`
  mutation DeleteInitiative($id: Int!) {
    deleteInitiative(id: $id) {
      initiativeId
      status
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($id: Int!) {
    deleteTask(id: $id) {
      taskId
      status
    }
  }
`;

export const CREATE_ATTACHMENT = gql`
  mutation CreateAttachment($input: AttachmentInput!) {
    createAttachment(input: $input) {
      attachment {
        id
        name
        path
        fileType
      }
    }
  }
`;

export const DELETE_ATTACHMENT = gql`
  mutation DeleteAttachment($id: Int!, $capabilityId: Int!) {
    deleteAttachment(id: $id, capabilityId: $capabilityId) {
      attachmentId
      status
    }
  }
`;

export const DELETE_EVENT = gql`
  mutation DeleteEvent($id: uuid!) {
    delete_event(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

export const DELETE_METRICS = gql`
  mutation DeleteMetrics($id: uuid!) {
    delete_metrics(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

export const DELETE_MAP = gql`
  mutation DeleteMap($id: uuid!) {
    delete_map(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

export const ACTIVE_COUNTRY = gql`
  mutation UpdateCountry($id: uuid!, $active: Boolean!) {
    update_country(where: { id: { _eq: $id } }, _set: { active: $active }) {
      affected_rows
    }
  }
`;

export const ACTIVE_MARKET = gql`
  mutation UpdateMarket($id: uuid!, $active: Boolean!) {
    update_market(where: { id: { _eq: $id } }, _set: { active: $active }) {
      affected_rows
    }
  }
`;