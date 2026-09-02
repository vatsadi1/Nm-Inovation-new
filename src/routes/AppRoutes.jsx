import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';

// Pages
import { HomePage } from '../pages/Home/HomePage';
import { AboutPage } from '../pages/About/AboutPage';
import { ServicesPage } from '../pages/Services/ServicesPage';
import { SolutionsOverviewPage } from '../pages/Solutions/SolutionsOverviewPage';
import { DigitalProductsPage } from '../pages/Solutions/DigitalProductsPage';
import { AiAutomationPage } from '../pages/Solutions/AiAutomationPage';
import { CrmErpPage } from '../pages/Solutions/CrmErpPage';
import { MarketingSystemsPage } from '../pages/Solutions/MarketingSystemsPage';
import { BusinessIntelligencePage } from '../pages/Solutions/BusinessIntelligencePage';

import { IndustriesOverviewPage } from '../pages/Industries/IndustriesOverviewPage';
import { RealEstatePage } from '../pages/Industries/RealEstatePage';
import { HealthcarePage } from '../pages/Industries/HealthcarePage';
import { EducationPage } from '../pages/Industries/EducationPage';
import { EcommercePage } from '../pages/Industries/EcommercePage';
import { ManufacturingPage } from '../pages/Industries/ManufacturingPage';
import { ProfessionalServicesPage } from '../pages/Industries/ProfessionalServicesPage';
import { IndustryDetailPage } from '../pages/Industries/IndustryDetailPage';

import { ProductsPage } from '../pages/Products/ProductsPage';
import { CaseStudiesPage } from '../pages/CaseStudies/CaseStudiesPage';
import { CaseStudyDetailPage } from '../pages/CaseStudies/CaseStudyDetailPage';
import { TechnologyPage } from '../pages/Technology/TechnologyPage';
import { InsightsPage } from '../pages/Blog/InsightsPage';
import { InsightDetailPage } from '../pages/Blog/InsightDetailPage';
import { AiAuditPage } from '../pages/AI-Audit/AiAuditPage';
import { ContactPage } from '../pages/Contact/ContactPage';
import { PrivacyPage } from '../pages/Legal/PrivacyPage';
import { TermsPage } from '../pages/Legal/TermsPage';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';
 

export function AppRoutes() {
  return (
    <Layout>
      <Routes>
        {/* Core Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        
        {/* Solutions Routes */}
        <Route path="/solutions" element={<SolutionsOverviewPage />} />
        <Route path="/solutions/digital-products" element={<DigitalProductsPage />} />
        <Route path="/solutions/ai-automation" element={<AiAutomationPage />} />
        <Route path="/solutions/crm-erp" element={<CrmErpPage />} />
        <Route path="/solutions/marketing" element={<MarketingSystemsPage />} />
        <Route path="/solutions/business-intelligence" element={<BusinessIntelligencePage />} />

        {/* Industries Routes */}
        <Route path="/industries" element={<IndustriesOverviewPage />} />
        <Route path="/industries/real-estate" element={<RealEstatePage />} />
        <Route path="/industries/healthcare" element={<HealthcarePage />} />
        <Route path="/industries/education" element={<EducationPage />} />
        <Route path="/industries/ecommerce" element={<EcommercePage />} />
        <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
        <Route path="/industries/professional-services" element={<ProfessionalServicesPage />} />
        <Route path="/industries/:slug" element={<IndustryDetailPage />} />

        {/* Products, Work & Tech */}
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/work" element={<CaseStudiesPage />} />
        <Route path="/work/:slug" element={<CaseStudyDetailPage />} />
        <Route path="/technology" element={<TechnologyPage />} />

        {/* Insights & Blog */}
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/:slug" element={<InsightDetailPage />} />

        {/* Interactive Tools & Conversion */}
        <Route path="/ai-audit" element={<AiAuditPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Legal */}
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />

        {/* 404 Catch-All */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      
    </Layout>
  );
}
