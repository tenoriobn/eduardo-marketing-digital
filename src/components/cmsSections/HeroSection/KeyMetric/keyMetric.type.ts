export interface KeyMetricProps {
  keyMetricCard: {
    id: string;
    count: string;
    description: string;
  }[];
}

export interface KeyMetricContent extends KeyMetricProps {
  id: string;
}
