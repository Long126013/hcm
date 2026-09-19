export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  badge?: string;
  quote?: string;
  keyPoints?: string[];
  suggestedImagePrompt?: string;
}

export interface SectionContent {
  id: string;
  code: string;
  title: string;
  chapter: string;
  presenter?: string;
  status: 'completed' | 'in_progress' | 'placeholder';
  description?: string;
}

export interface SlideItem {
  id: string;
  sectionCode: string;
  sectionTitle: string;
  title: string;
  subtitle?: string;
  presenter?: string;
  layout: 'intro' | 'formula' | 'timeline' | 'content' | 'quote' | 'grid' | 'comparison';
  content?: string[];
  bullets?: { title: string; desc: string; icon?: string }[];
  quote?: { text: string; author?: string; work?: string };
  imagePlaceholder?: {
    label: string;
    prompt: string;
  };
  notes?: string;
}
