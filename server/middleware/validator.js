/**
 * Input sanitization and payload validation middleware
 */

export function validateInquiryPayload(req, res, next) {
  const { name, businessName, email, message } = req.body || {};
  const errors = [];

  if (!name || typeof name !== 'string' || !name.trim()) {
    errors.push('Full name is required.');
  }

  if (!businessName || typeof businessName !== 'string' || !businessName.trim()) {
    errors.push('Business name is required.');
  }

  if (!email || typeof email !== 'string' || !/\S+@\S+\.\S+/.test(email.trim())) {
    errors.push('A valid email address is required.');
  }

  if (!message || typeof message !== 'string' || !message.trim()) {
    errors.push('Project context message is required.');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      error: 'Invalid inquiry payload',
      details: errors
    });
  }

  // Sanitize fields
  req.body.name = name.trim();
  req.body.businessName = businessName.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.message = message.trim();

  next();
}

export function validateSystemPlanPayload(req, res, next) {
  const { name, businessName, email, selectedModules } = req.body || {};
  const errors = [];

  if (!name || !name.trim()) errors.push('Name is required.');
  if (!businessName || !businessName.trim()) errors.push('Business name is required.');
  if (!email || !/\S+@\S+\.\S+/.test(email.trim())) errors.push('Valid email is required.');
  if (!Array.isArray(selectedModules) || selectedModules.length === 0) {
    errors.push('At least one operational module must be selected.');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      error: 'Invalid system plan payload',
      details: errors
    });
  }

  next();
}

export function validateAuditPayload(req, res, next) {
  const { totalScore, dimensionBreakdown } = req.body || {};

  if (typeof totalScore !== 'number' || totalScore < 0 || totalScore > 100) {
    return res.status(400).json({
      success: false,
      error: 'Total score must be a number between 0 and 100.'
    });
  }

  next();
}
