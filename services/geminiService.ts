

// Removing the real AI import and initialization to avoid "API Key must be set" error
// import { GoogleGenAI, Type } from "@google/genai";
// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateSlideContent(topic: string) {
  // Mocking the AI response with realistic fallback data
  console.log("Mocking AI content generation for topic:", topic);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  return {
    title: `فرصة تدريبية: ${topic}`,
    description: `نعلن عن فتح باب التقديم لبرنامج التدريب المكثف في مجال ${topic}. يهدف البرنامج إلى تطوير المهارات العملية وتوفير خبرة حقيقية في بيئة عمل احترافية تدعم الابتكار والتميز.`,
    specializations: [
      topic,
      "الإدارة والتشغيل",
      "تحليل النظم",
      "التطوير التقني",
      "الجودة والتميز",
      "التواصل المؤسسي"
    ],
    duration: "4 - 6 أشهر",
    incentives: "مكافأة مالية شهرية مع إمكانية التوظيف بعد انتهاء البرنامج"
  };
}

export async function generateHeaderImage(prompt: string): Promise<string | null> {
  // Mocking the image generation by returning a high-quality Unsplash image
  // This avoids the need for an image generation API
  console.log("Mocking Image generation for prompt:", prompt);
  
  const keywords = ["office", "building", "saudi", "work", "tech", "business"];
  const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
  
  // Using a random Unsplash image as a fallback
  return `https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200&h=600&sig=${Math.random()}`;
}

