export interface author {
  firstName: string;
  lastName: string;
  email: string;
  type: string;
}

export interface subject {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  type: string;
}

export interface RolodexElement {
  text: string;
  author: author;
  subject: subject;
  type: string;
}

export interface RolodexElementSource {
  source: RolodexElement;
}
