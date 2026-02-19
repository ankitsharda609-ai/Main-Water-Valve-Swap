
export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
