/**
 * NM Innovation API Client Service Layer
 *
 * Production API client.
 * Uses same-origin API routes so it works with:
 * - Local Vite development
 * - Netlify deployment
 * - Custom domain
 */

const API_BASE_URL = '/api/v1';

async function parseResponse(response) {
  let data = null;

  try {
    data = await response.json();
  } catch {
    // Server did not return JSON.
  }

  if (!response.ok) {
    throw new Error(
      data?.error ||
      data?.message ||
      `Request failed with status ${response.status}.`
    );
  }

  return data;
}

export const apiClient = {
  async submitInquiry(formData) {
    const response = await fetch(
      `${API_BASE_URL}/inquiries`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          businessName: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          companySize: formData.companySize,
          services: formData.services,
          budget: formData.budget,
          message: formData.message
        })
      }
    );

    return parseResponse(response);
  },

  async submitAuditResults(auditData) {
    const response = await fetch(
      `${API_BASE_URL}/audits`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          totalScore: auditData.totalScore,
          tier: auditData.tier,
          dimensionBreakdown: auditData.dimensions,
          clientInfo: auditData.clientInfo || {}
        })
      }
    );

    return parseResponse(response);
  },

  async submitSystemPlan(planData) {
    const response = await fetch(
      `${API_BASE_URL}/system-plans`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: planData.name,
          businessName: planData.businessName,
          email: planData.email,
          phone: planData.phone,
          notes: planData.notes,
          selectedModules: planData.selectedModules,
          architectureSpecs: planData.architecture || {}
        })
      }
    );

    return parseResponse(response);
  },

  async getTelemetry() {
    const response = await fetch(
      `${API_BASE_URL}/telemetry`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      }
    );

    return parseResponse(response);
  },

  async checkHealth() {
    const response = await fetch(
      `${API_BASE_URL}/health`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      }
    );

    return parseResponse(response);
  }
};