"""Generate placeholder PDF files for the agricultural fertilizers system."""
from fpdf import FPDF
import os

OUTPUT_DIR = r"src\assets\pdfs"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Color scheme
GREEN_DARK = (26, 92, 42)
GREEN_MID  = (45, 140, 71)
GREEN_LIGHT= (232, 245, 233)
WHITE      = (255, 255, 255)
GRAY       = (100, 100, 100)
DARK       = (30, 30, 30)

PDFS = [
    {
        "filename": "nitrogen-fertilizers-guide.pdf",
        "title":    "Nitrogen Fertilizers Guide",
        "title_ar": "دليل الأسمدة النيتروجينية وتوصيات التسميد",
        "author":   "Ministry of Agriculture & Land Reclamation",
        "org":      "Center for Land, Water and Environment Research",
        "year":     "2022",
        "pages_info": "85 pages",
        "category": "Fertilizers",
        "desc": (
            "A comprehensive guide covering all types of nitrogen fertilizers\n"
            "and their efficient use in various agricultural crops,\n"
            "with detailed recommendations for each crop.\n\n"
            "Topics covered:\n"
            "  - Urea (CO(NH2)2) - 46% N\n"
            "  - Ammonium Nitrate (NH4NO3) - 33.5% N\n"
            "  - Ammonium Sulfate ((NH4)2SO4) - 21% N\n"
            "  - Application rates and timing\n"
            "  - Environmental considerations\n"
            "  - Crop-specific recommendations"
        ),
        "tags": ["Urea", "Ammonium Nitrate", "Nitrogen", "Wheat", "Corn"],
    },
    {
        "filename": "phosphate-fertilizers.pdf",
        "title":    "Phosphate Fertilizers in Modern Agriculture",
        "title_ar": "الأسمدة الفوسفاتية في الزراعة الحديثة",
        "author":   "Dr. Sami Abdel Rahman",
        "org":      "Institute for Land, Water and Environment Research",
        "year":     "2020",
        "pages_info": "62 pages",
        "category": "Fertilizers",
        "desc": (
            "A specialized research paper on phosphate fertilizers\n"
            "covering their types, sources, and application methods\n"
            "to improve crop productivity.\n\n"
            "Topics covered:\n"
            "  - Triple Superphosphate (TSP) - 46% P2O5\n"
            "  - Single Superphosphate (SSP) - 18% P2O5\n"
            "  - Diammonium Phosphate (DAP) - 18-46-0\n"
            "  - Soil pH effects on phosphorus availability\n"
            "  - Root development and phosphorus\n"
            "  - Application methods and timing"
        ),
        "tags": ["Superphosphate", "Phosphorus", "Roots", "Soil"],
    },
    {
        "filename": "potassium-role.pdf",
        "title":    "Role of Potassium in Improving Crop Quality",
        "title_ar": "دور البوتاسيوم في تحسين جودة المحاصيل",
        "author":   "Dr. Hany Salah  |  Dr. Mariam Youssef",
        "org":      "National Research Centre",
        "year":     "2022",
        "pages_info": "48 pages",
        "category": "Fertilizers",
        "desc": (
            "A scientific study explaining the role of potassium\n"
            "in plant life and how it affects crop quality,\n"
            "disease resistance, and environmental stress tolerance.\n\n"
            "Topics covered:\n"
            "  - Potassium Chloride (KCl) - 60% K2O\n"
            "  - Potassium Sulfate (K2SO4) - 50% K2O\n"
            "  - Potassium Nitrate (KNO3) - 13-0-46\n"
            "  - Effect on fruit quality and shelf life\n"
            "  - Drought resistance mechanisms\n"
            "  - Interactions with other nutrients"
        ),
        "tags": ["Potassium", "Crop Quality", "Disease Resistance", "Potato", "Tomato"],
    },
    {
        "filename": "organic-fertilization.pdf",
        "title":    "Organic Fertilization and Sustainable Agriculture",
        "title_ar": "التسميد العضوي والزراعة المستدامة",
        "author":   "Dr. Noha Abdel Moneim  |  Dr. Essam Eddin Mohamed",
        "org":      "Agricultural Research Center",
        "year":     "2023",
        "pages_info": "110 pages",
        "category": "Fertilizers / Sustainability",
        "desc": (
            "A comprehensive guide to organic fertilization showing\n"
            "the benefits of organic fertilizers in improving soil\n"
            "health and increasing productivity sustainably.\n\n"
            "Topics covered:\n"
            "  - Compost production and maturity\n"
            "  - Animal manure types and management\n"
            "  - Green manures and cover crops\n"
            "  - Biofertilizers and microbial inoculants\n"
            "  - Soil organic matter and carbon\n"
            "  - Transition to organic farming"
        ),
        "tags": ["Compost", "Organic Matter", "Organic Farming", "Sustainability", "Soil"],
    },
    {
        "filename": "compound-micronutrients.pdf",
        "title":    "Compound Fertilizers and Micronutrients",
        "title_ar": "الأسمدة المركبة والعناصر الصغرى",
        "author":   "Eng. Khaled Mahmoud  |  Dr. Rania Fathy",
        "org":      "Faculty of Agriculture - Ain Shams University",
        "year":     "2021",
        "pages_info": "75 pages",
        "category": "Fertilizers",
        "desc": (
            "A comprehensive reference for compound fertilizers\n"
            "and micronutrient nutrition in modern agriculture,\n"
            "with recommendations for correcting deficiencies.\n\n"
            "Topics covered:\n"
            "  - NPK compound formulations (15-15-15, 20-20-20, etc.)\n"
            "  - Iron chelates (EDTA-Fe, EDDHA-Fe)\n"
            "  - Zinc, Manganese, Copper, Boron\n"
            "  - Deficiency symptoms and diagnosis\n"
            "  - Foliar vs. soil application\n"
            "  - Fertigation and drip irrigation"
        ),
        "tags": ["NPK", "Micronutrients", "Iron", "Zinc", "Manganese", "Boron"],
    },
    {
        "filename": "soil-analysis-fertilization.pdf",
        "title":    "Soil Analysis and Fertilization Programs",
        "title_ar": "تحليل التربة وبرامج التسميد",
        "author":   "Dr. Mohamed El-Sayed Othman",
        "org":      "Institute for Land and Water Research",
        "year":     "2023",
        "pages_info": "95 pages",
        "category": "Soil Science",
        "desc": (
            "How to conduct soil analysis, interpret the results,\n"
            "and build integrated fertilization programs based\n"
            "on crop needs and soil characteristics.\n\n"
            "Topics covered:\n"
            "  - Soil sampling methods and procedures\n"
            "  - Laboratory analysis techniques\n"
            "  - Interpreting pH, EC, and nutrient levels\n"
            "  - Building a fertilization schedule\n"
            "  - Record keeping and monitoring\n"
            "  - Economic optimization of inputs"
        ),
        "tags": ["Soil Analysis", "pH", "Soil Fertility", "Fertilization Programs"],
    },
    {
        "filename": "vegetable-fertilization.pdf",
        "title":    "Vegetable Crop Fertilization Guide",
        "title_ar": "دليل تسميد محاصيل الخضروات",
        "author":   "Agricultural Research Team",
        "org":      "Ministry of Agriculture & Land Reclamation - Egypt",
        "year":     "2022",
        "pages_info": "130 pages",
        "category": "Crop Management",
        "desc": (
            "A practical guide for fertilizing the most important\n"
            "vegetable crops in Egypt and the Arab world, with\n"
            "detailed recommendations for each growth stage.\n\n"
            "Crops covered:\n"
            "  - Tomatoes, Peppers, Cucumbers, Eggplant\n"
            "  - Potatoes, Onions, Garlic, Carrots\n"
            "  - Leafy vegetables (lettuce, spinach)\n"
            "  - Legumes (beans, peas)\n"
            "  - Fertigation programs\n"
            "  - Greenhouse vs. field fertilization"
        ),
        "tags": ["Tomato", "Cucumber", "Pepper", "Potato", "Vegetables", "Fertilization"],
    },
    {
        "filename": "fao-fertilizer-egypt.pdf",
        "title":    "Fertilizer Use and Management in Egypt",
        "title_ar": "استخدام الأسمدة وإدارتها في مصر",
        "author":   "FAO Egypt Country Office",
        "org":      "Food and Agriculture Organization (FAO) - United Nations",
        "year":     "2021",
        "pages_info": "56 pages",
        "category": "Research Report",
        "desc": (
            "A research report reviewing the current status of\n"
            "fertilizer use in Egypt, challenges in management,\n"
            "and recommendations for improving efficiency.\n\n"
            "Topics covered:\n"
            "  - Overview of Egypt's agricultural sector\n"
            "  - Fertilizer consumption statistics\n"
            "  - Subsidy policies and market analysis\n"
            "  - Environmental impact assessment\n"
            "  - Best management practices\n"
            "  - Future outlook and recommendations"
        ),
        "tags": ["FAO", "Egypt", "Fertilizer Management", "Policy", "Efficiency"],
    },
]


def create_pdf(info: dict) -> None:
    pdf = FPDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()

    # ── Header bar ──────────────────────────────────────────
    pdf.set_fill_color(*GREEN_DARK)
    pdf.rect(0, 0, 210, 35, style="F")

    pdf.set_fill_color(*GREEN_MID)
    pdf.rect(0, 35, 210, 5, style="F")

    # System name (top left)
    pdf.set_xy(10, 8)
    pdf.set_font("Helvetica", "B", 9)
    pdf.set_text_color(*WHITE)
    pdf.cell(0, 6, "Agricultural Fertilizers Information System", ln=True)

    pdf.set_xy(10, 16)
    pdf.set_font("Helvetica", "", 8)
    pdf.set_text_color(200, 230, 200)
    pdf.cell(0, 5, f"Category: {info['category']}  |  Year: {info['year']}  |  {info['pages_info']}", ln=True)

    # ── Title block ──────────────────────────────────────────
    pdf.set_fill_color(*GREEN_LIGHT)
    pdf.rect(0, 40, 210, 55, style="F")

    pdf.set_xy(15, 48)
    pdf.set_font("Helvetica", "B", 20)
    pdf.set_text_color(*GREEN_DARK)
    pdf.multi_cell(180, 10, info["title"])

    # Arabic title hint
    pdf.set_xy(15, pdf.get_y() + 2)
    pdf.set_font("Helvetica", "I", 11)
    pdf.set_text_color(*GRAY)
    pdf.cell(0, 7, f"Ref: {info['category']}  |  {info['pages_info']}  |  {info['year']}", ln=True)

    # ── Author / Org strip ───────────────────────────────────
    pdf.set_fill_color(*GREEN_MID)
    y_strip = pdf.get_y() + 4
    pdf.rect(0, y_strip, 210, 18, style="F")
    pdf.set_xy(15, y_strip + 3)
    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(*WHITE)
    pdf.cell(100, 6, f"Author: {info['author']}")
    pdf.set_font("Helvetica", "", 10)
    pdf.cell(0, 6, f"  {info['org']}", ln=True)

    # ── Description ──────────────────────────────────────────
    pdf.set_xy(15, y_strip + 26)
    pdf.set_font("Helvetica", "B", 12)
    pdf.set_text_color(*GREEN_DARK)
    pdf.cell(0, 8, "About This Document", ln=True)

    # Underline
    pdf.set_draw_color(*GREEN_MID)
    pdf.set_line_width(0.5)
    uy = pdf.get_y()
    pdf.line(15, uy, 80, uy)

    pdf.set_xy(15, uy + 4)
    pdf.set_font("Helvetica", "", 11)
    pdf.set_text_color(*DARK)
    pdf.multi_cell(180, 7, info["desc"])

    # ── Keywords ────────────────────────────────────────────
    pdf.ln(6)
    pdf.set_font("Helvetica", "B", 11)
    pdf.set_text_color(*GREEN_DARK)
    pdf.cell(0, 7, "Keywords:", ln=True)

    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(*DARK)
    x_start = 15
    for tag in info["tags"]:
        pdf.set_fill_color(*GREEN_LIGHT)
        pdf.set_draw_color(*GREEN_MID)
        w = pdf.get_string_width(tag) + 10
        if x_start + w > 195:
            x_start = 15
            pdf.ln(10)
        pdf.set_xy(x_start, pdf.get_y())
        pdf.cell(w, 7, tag, border=1, fill=True)
        x_start += w + 4

    # ── Footer ───────────────────────────────────────────────
    pdf.set_fill_color(*GREEN_DARK)
    pdf.rect(0, 282, 210, 15, style="F")
    pdf.set_xy(10, 285)
    pdf.set_font("Helvetica", "", 8)
    pdf.set_text_color(*WHITE)
    pdf.cell(90, 6, f"(c) {info['year']} - {info['org']}")
    pdf.cell(0, 6, "Agricultural Fertilizers Information System", align="R")

    out = os.path.join(OUTPUT_DIR, info["filename"])
    pdf.output(out)
    print(f"  Created: {info['filename']}")


if __name__ == "__main__":
    print("Generating PDF files...")
    for item in PDFS:
        create_pdf(item)
    print(f"\nDone! {len(PDFS)} PDF files created in: {OUTPUT_DIR}")
