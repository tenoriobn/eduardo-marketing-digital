export interface ModalMainProps {
  modalMainContent: ModalMainContent;
}

export interface ModalMainContent {
  id: string;
  impactPhraseDescriptionModal: string;
  impactPhraseModal: string;
  activitiesContent: ActivitiesContent[];
  serviceActivityTitle: string;
  expectedImpactTitle: string;
  expectedImpacts: ExpectedImpact[];
  ctalink: CTALink;
}

interface ActivitiesContent {
  id: string;
  serviceActivity: string;
  serviceActivityDescription: string;
}

interface ExpectedImpact {
  id: string;
  expectedImpactDescription: string;
}

interface CTALink {
  label: string;
  url: string;
}
