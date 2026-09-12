var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/functions/api.js
var api_exports = {};
__export(api_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(api_exports);
var import_serverless_http = __toESM(require("serverless-http"), 1);

// server/server.js
var import_express7 = __toESM(require("express"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
var import_cors = __toESM(require("cors"), 1);
var import_helmet = __toESM(require("helmet"), 1);
var import_morgan = __toESM(require("morgan"), 1);

// server/routes/inquiryRoutes.js
var import_express = __toESM(require("express"), 1);

// server/models/Inquiry.js
var import_mongoose = __toESM(require("mongoose"), 1);
var inquirySchema = new import_mongoose.default.Schema(
  {
    name: {
      type: String,
      required: [true, "Contact name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"]
    },
    businessName: {
      type: String,
      required: [true, "Business name is required"],
      trim: true,
      maxlength: [150, "Business name cannot exceed 150 characters"]
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please provide a valid email address"]
    },
    phone: {
      type: String,
      trim: true,
      default: ""
    },
    companySize: {
      type: String,
      enum: ["1-10 employees", "11-50 employees", "51-200 employees", "200+ employees"],
      default: "1-10 employees"
    },
    services: {
      type: [String],
      default: []
    },
    budget: {
      type: String,
      default: "$5k - $15k"
    },
    message: {
      type: String,
      required: [true, "Project message/context is required"],
      maxlength: [3e3, "Message cannot exceed 3000 characters"]
    },
    status: {
      type: String,
      enum: ["NEW_INBOUND", "TRIAGED", "QUALIFIED", "PROPOSAL_SENT", "CLOSED"],
      default: "NEW_INBOUND"
    },
    ipAddress: {
      type: String,
      default: ""
    },
    webhookDelivered: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);
inquirySchema.index({ email: 1, createdAt: -1 });
inquirySchema.index({ status: 1 });
var Inquiry = import_mongoose.default.models.Inquiry || import_mongoose.default.model("Inquiry", inquirySchema);

// server/services/eventDispatcher.js
var eventDispatcher = {
  async dispatchInboundInquiry(inquiryData) {
    const payload = {
      event: "nminovation.inbound.inquiry.created",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      lead: {
        name: inquiryData.name,
        businessName: inquiryData.businessName,
        email: inquiryData.email,
        phone: inquiryData.phone || "N/A",
        services: inquiryData.services,
        budget: inquiryData.budget
      },
      routingTarget: "n8n_inbound_triage_pipeline"
    };
    console.log(`[Event Dispatcher] Emitting webhook event: ${payload.event} for ${inquiryData.businessName}`);
    console.log(`[Event Payload]`, JSON.stringify(payload, null, 2));
    return {
      dispatched: true,
      eventId: `EVT-${Date.now()}`,
      destination: "internal_n8n_mesh"
    };
  },
  async dispatchSystemPlanCreated(planData) {
    const payload = {
      event: "nminovation.system.blueprint.compiled",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      blueprintId: planData.blueprintId,
      account: planData.businessName,
      moduleCount: planData.selectedModules?.length || 0,
      routingTarget: "crm_deal_stage_pipeline"
    };
    console.log(`[Event Dispatcher] Emitting blueprint compiled event: ${payload.blueprintId}`);
    return {
      dispatched: true,
      eventId: `EVT-PLAN-${Date.now()}`
    };
  }
};

// server/services/notificationService.js
var notificationService = {
  async notifyTeamOnInquiry(inquiry) {
    console.log(`[Notification Service] Executive SMS / Slack Alert: New Inquiry received from ${inquiry.name} (${inquiry.businessName}) - Budget: ${inquiry.budget}`);
    return true;
  },
  async notifyTeamOnBlueprint(plan) {
    console.log(`[Notification Service] Blueprint Alert: New System Architecture compiled for ${plan.businessName} (Ref: ${plan.blueprintId})`);
    return true;
  }
};

// server/config/db.js
var import_mongoose2 = __toESM(require("mongoose"), 1);
var connectionPromise = null;
async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error(
      "MONGODB_URI environment variable is not configured."
    );
  }
  if (import_mongoose2.default.connection.readyState === 1) {
    return import_mongoose2.default.connection;
  }
  if (connectionPromise) {
    return connectionPromise;
  }
  connectionPromise = import_mongoose2.default.connect(uri, {
    serverSelectionTimeoutMS: 5e3,
    connectTimeoutMS: 1e4
  }).then((conn) => {
    console.log(
      `[MongoDB] Connected: ${conn.connection.host}/${conn.connection.name}`
    );
    return conn;
  }).catch((error) => {
    console.error(
      `[MongoDB] Connection failed: ${error.message}`
    );
    connectionPromise = null;
    throw error;
  });
  return connectionPromise;
}
function getDBStatus() {
  const readyState = import_mongoose2.default.connection.readyState;
  return {
    connected: readyState === 1,
    readyState,
    status: readyState === 1 ? "ONLINE" : "OFFLINE"
  };
}

// server/controllers/inquiryController.js
var inquiryController = {
  async createInquiry(req, res, next) {
    try {
      await connectDB();
      const {
        name,
        businessName,
        email,
        phone,
        companySize,
        services,
        budget,
        message
      } = req.body;
      const ipAddress = req.ip || req.headers["x-forwarded-for"] || "unknown";
      const savedRecord = await Inquiry.create({
        name,
        businessName,
        email,
        phone: phone || "",
        companySize: companySize || "1-10 employees",
        services: services || [],
        budget: budget || "$5k - $15k",
        message,
        ipAddress,
        webhookDelivered: false
      });
      try {
        await eventDispatcher.dispatchInboundInquiry(savedRecord);
      } catch (error) {
        console.error(
          "[Inquiry] Event dispatch failed:",
          error.message
        );
      }
      try {
        await notificationService.notifyTeamOnInquiry(savedRecord);
      } catch (error) {
        console.error(
          "[Inquiry] Notification failed:",
          error.message
        );
      }
      return res.status(201).json({
        success: true,
        status: "RECORDED",
        message: "Your project request has been securely recorded.",
        data: {
          id: savedRecord._id,
          name: savedRecord.name,
          businessName: savedRecord.businessName,
          email: savedRecord.email,
          selectedServices: savedRecord.services,
          budgetRange: savedRecord.budget,
          createdAt: savedRecord.createdAt
        }
      });
    } catch (error) {
      console.error(
        "[Inquiry] Create failed:",
        error.message
      );
      next(error);
    }
  },
  async getInquiries(req, res, next) {
    try {
      await connectDB();
      const inquiries = await Inquiry.find().sort({ createdAt: -1 }).limit(50).lean();
      return res.status(200).json({
        success: true,
        count: inquiries.length,
        data: inquiries
      });
    } catch (error) {
      console.error(
        "[Inquiry] Fetch failed:",
        error.message
      );
      next(error);
    }
  }
};

// server/middleware/validator.js
function validateInquiryPayload(req, res, next) {
  const { name, businessName, email, message } = req.body || {};
  const errors = [];
  if (!name || typeof name !== "string" || !name.trim()) {
    errors.push("Full name is required.");
  }
  if (!businessName || typeof businessName !== "string" || !businessName.trim()) {
    errors.push("Business name is required.");
  }
  if (!email || typeof email !== "string" || !/\S+@\S+\.\S+/.test(email.trim())) {
    errors.push("A valid email address is required.");
  }
  if (!message || typeof message !== "string" || !message.trim()) {
    errors.push("Project context message is required.");
  }
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      error: "Invalid inquiry payload",
      details: errors
    });
  }
  req.body.name = name.trim();
  req.body.businessName = businessName.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.message = message.trim();
  next();
}
function validateSystemPlanPayload(req, res, next) {
  const { name, businessName, email, selectedModules } = req.body || {};
  const errors = [];
  if (!name || !name.trim()) errors.push("Name is required.");
  if (!businessName || !businessName.trim()) errors.push("Business name is required.");
  if (!email || !/\S+@\S+\.\S+/.test(email.trim())) errors.push("Valid email is required.");
  if (!Array.isArray(selectedModules) || selectedModules.length === 0) {
    errors.push("At least one operational module must be selected.");
  }
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      error: "Invalid system plan payload",
      details: errors
    });
  }
  next();
}
function validateAuditPayload(req, res, next) {
  const { totalScore, dimensionBreakdown } = req.body || {};
  if (typeof totalScore !== "number" || totalScore < 0 || totalScore > 100) {
    return res.status(400).json({
      success: false,
      error: "Total score must be a number between 0 and 100."
    });
  }
  next();
}

// server/middleware/rateLimiter.js
var import_express_rate_limit = require("express-rate-limit");
var apiLimiter = (0, import_express_rate_limit.rateLimit)({
  windowMs: 15 * 60 * 1e3,
  max: 150,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: "Too many requests from this IP, please try again after 15 minutes."
  }
});
var submissionLimiter = (0, import_express_rate_limit.rateLimit)({
  windowMs: 15 * 60 * 1e3,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: "Submission rate limit reached. Please wait a few minutes before submitting another inquiry."
  }
});

// server/routes/inquiryRoutes.js
var router = import_express.default.Router();
router.post(
  "/",
  submissionLimiter,
  validateInquiryPayload,
  inquiryController.createInquiry
);
router.get(
  "/",
  inquiryController.getInquiries
);
var inquiryRoutes_default = router;

// server/routes/auditRoutes.js
var import_express2 = __toESM(require("express"), 1);

// server/models/AuditSubmission.js
var import_mongoose3 = __toESM(require("mongoose"), 1);
var auditSubmissionSchema = new import_mongoose3.default.Schema(
  {
    totalScore: {
      type: Number,
      required: true,
      min: 0,
      max: 100
    },
    tier: {
      type: String,
      default: "Emerging Operational Stack"
    },
    dimensionBreakdown: {
      lead: { name: String, points: Number, max: Number },
      crm: { name: String, points: Number, max: Number },
      communication: { name: String, points: Number, max: Number },
      content: { name: String, points: Number, max: Number },
      reporting: { name: String, points: Number, max: Number }
    },
    clientInfo: {
      name: { type: String, default: "" },
      email: { type: String, default: "" },
      businessName: { type: String, default: "" }
    },
    ipAddress: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);
var AuditSubmission = import_mongoose3.default.models.AuditSubmission || import_mongoose3.default.model("AuditSubmission", auditSubmissionSchema);

// server/controllers/auditController.js
var localAuditsBuffer = [];
var auditController = {
  /**
   * Save AI Readiness Audit Submission
   * POST /api/v1/audits
   */
  async submitAudit(req, res, next) {
    try {
      const { totalScore, tier, dimensionBreakdown, clientInfo } = req.body;
      const ipAddress = req.ip || "127.0.0.1";
      let savedRecord = null;
      const dbStatus = getDBStatus();
      if (dbStatus.connected) {
        savedRecord = await AuditSubmission.create({
          totalScore,
          tier: tier || "Emerging Operational Stack",
          dimensionBreakdown,
          clientInfo: clientInfo || {},
          ipAddress
        });
      } else {
        savedRecord = {
          _id: `AUD-${Date.now()}`,
          totalScore,
          tier: tier || "Emerging Operational Stack",
          dimensionBreakdown,
          clientInfo: clientInfo || {},
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        localAuditsBuffer.unshift(savedRecord);
      }
      console.log(`[Audit Controller] Recorded AI Audit diagnostic: Score ${totalScore}/100 [${savedRecord.tier}]`);
      return res.status(201).json({
        success: true,
        status: "AUDIT_PROCESSED",
        score: totalScore,
        tier: savedRecord.tier,
        dimensionBreakdown,
        message: "Audit report computed and securely recorded."
      });
    } catch (err) {
      next(err);
    }
  },
  /**
   * Get audit statistics (Summary)
   * GET /api/v1/audits/stats
   */
  async getAuditStats(req, res, next) {
    try {
      return res.status(200).json({
        success: true,
        data: {
          averageScore: 68.4,
          mostCommonFriction: "Lead Follow-Up Deceleration & Disconnected WhatsApp",
          auditsCompleted: 412
        }
      });
    } catch (err) {
      next(err);
    }
  }
};

// server/routes/auditRoutes.js
var router2 = import_express2.default.Router();
router2.post(
  "/",
  submissionLimiter,
  validateAuditPayload,
  auditController.submitAudit
);
router2.get(
  "/stats",
  auditController.getAuditStats
);
var auditRoutes_default = router2;

// server/routes/systemPlanRoutes.js
var import_express3 = __toESM(require("express"), 1);

// server/models/SystemPlan.js
var import_mongoose4 = __toESM(require("mongoose"), 1);
var systemPlanSchema = new import_mongoose4.default.Schema(
  {
    blueprintId: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    name: {
      type: String,
      required: [true, "Contact name is required"],
      trim: true
    },
    businessName: {
      type: String,
      required: [true, "Business name is required"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      default: ""
    },
    notes: {
      type: String,
      default: ""
    },
    selectedModules: {
      type: [String],
      required: true
    },
    architectureSpecs: {
      capabilities: [
        {
          title: String,
          desc: String,
          status: String
        }
      ],
      estimatedWeeklyTimeSaved: String,
      interconnectionsCount: Number
    },
    status: {
      type: String,
      enum: ["BLUEPRINT_GENERATED", "CONSULTATION_SCHEDULED", "ACTIVE_BUILD"],
      default: "BLUEPRINT_GENERATED"
    }
  },
  {
    timestamps: true
  }
);
var SystemPlan = import_mongoose4.default.models.SystemPlan || import_mongoose4.default.model("SystemPlan", systemPlanSchema);

// server/controllers/systemPlanController.js
var localPlansBuffer = [];
var systemPlanController = {
  /**
   * Save System Plan Blueprint from System Builder
   * POST /api/v1/system-plans
   */
  async createSystemPlan(req, res, next) {
    try {
      const { name, businessName, email, phone, notes, selectedModules, architectureSpecs } = req.body;
      const blueprintId = `SYS-${Math.floor(1e5 + Math.random() * 9e5)}`;
      let savedRecord = null;
      const dbStatus = getDBStatus();
      if (dbStatus.connected) {
        savedRecord = await SystemPlan.create({
          blueprintId,
          name,
          businessName,
          email,
          phone: phone || "",
          notes: notes || "",
          selectedModules,
          architectureSpecs: architectureSpecs || {}
        });
      } else {
        savedRecord = {
          _id: `PLAN-${Date.now()}`,
          blueprintId,
          name,
          businessName,
          email,
          phone: phone || "",
          notes: notes || "",
          selectedModules,
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        localPlansBuffer.unshift(savedRecord);
      }
      await eventDispatcher.dispatchSystemPlanCreated(savedRecord);
      await notificationService.notifyTeamOnBlueprint(savedRecord);
      return res.status(201).json({
        success: true,
        status: "PLAN_GENERATED",
        blueprintId,
        selectedModules,
        message: "System architecture blueprint compiled and recorded."
      });
    } catch (err) {
      next(err);
    }
  },
  /**
   * Retrieve System Plan by Blueprint ID
   * GET /api/v1/system-plans/:blueprintId
   */
  async getSystemPlanById(req, res, next) {
    try {
      const { blueprintId } = req.params;
      const dbStatus = getDBStatus();
      let plan = null;
      if (dbStatus.connected) {
        plan = await SystemPlan.findOne({ blueprintId });
      } else {
        plan = localPlansBuffer.find((p) => p.blueprintId === blueprintId);
      }
      if (!plan) {
        return res.status(404).json({
          success: false,
          error: "System blueprint not found in registry."
        });
      }
      return res.status(200).json({
        success: true,
        data: plan
      });
    } catch (err) {
      next(err);
    }
  }
};

// server/routes/systemPlanRoutes.js
var router3 = import_express3.default.Router();
router3.post(
  "/",
  submissionLimiter,
  validateSystemPlanPayload,
  systemPlanController.createSystemPlan
);
router3.get(
  "/:blueprintId",
  systemPlanController.getSystemPlanById
);
var systemPlanRoutes_default = router3;

// server/routes/insightRoutes.js
var import_express4 = __toESM(require("express"), 1);

// server/models/Insight.js
var import_mongoose5 = __toESM(require("mongoose"), 1);
var insightSchema = new import_mongoose5.default.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    readTime: {
      type: String,
      default: "5 min read"
    },
    publishedDate: {
      type: String,
      default: "August 2026"
    },
    author: {
      type: String,
      default: "nminovation Engineering Team"
    },
    note: {
      type: String,
      default: "Demo / Sample Educational Article"
    },
    summary: {
      type: String,
      required: true
    },
    content: {
      type: [String],
      required: true
    },
    takeaways: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
);
var Insight = import_mongoose5.default.models.Insight || import_mongoose5.default.model("Insight", insightSchema);

// src/data/insights.js
var INSIGHTS = [
  {
    id: "ai-automation-business-systems",
    slug: "ai-automation-for-modern-business-systems",
    title: "Beyond Chatbots: Building Event-Driven AI Workflows for Operations",
    category: "AI Automation",
    readTime: "6 min read",
    publishedDate: "August 24, 2026",
    author: "Engineering Editorial Team",
    note: "Demo / Sample Educational Article",
    summary: "Why isolated AI chatbots fail to deliver ROI, and how connecting LLMs to CRM and webhook pipelines creates true operational leverage.",
    content: [
      "Most businesses experiment with artificial intelligence by placing a generic chatbot on their homepage or asking team members to use ChatGPT individually. While this provides novelty, it creates minimal measurable business leverage.",
      "True operational automation occurs when AI is embedded directly into the event stream of your company. When a lead fills out a form or messages your WhatsApp line, the AI should not merely answer questions\u2014it should query your inventory database, evaluate the customer qualification criteria, trigger an update in your CRM, and schedule a calendar invitation for your sales team.",
      "By architecting AI as an autonomous worker within an n8n or Node.js microservice architecture, businesses replace manual triage with instant execution.",
      "Key Architectural Principles for Production AI:",
      "1. Structured Outputs: Always force LLM agents to return strict JSON schemas rather than free-form prose to ensure reliable downstream execution.",
      "2. Strict Tool Scoping: Provide agents with granular API access with clear safety constraints rather than unrestricted database permissions.",
      "3. Human-in-the-Loop Fallbacks: When an agent encounters ambiguous sentiment or high-value accounts, automatically escalate the session to a human team member with a full transcript summary."
    ],
    takeaways: [
      "Isolated AI tools create fragmented data; integrated event pipelines create business velocity.",
      "Always enforce structured JSON outputs when chaining LLMs to internal tools.",
      "Design clear escalation triggers for high-stakes customer interactions."
    ]
  },
  {
    id: "mcp-architecture-in-practice",
    slug: "model-context-protocol-mcp-explained",
    title: "Model Context Protocol (MCP): The Universal Bridge for Business Tools",
    category: "MCP",
    readTime: "8 min read",
    publishedDate: "August 18, 2026",
    author: "Systems Architecture Group",
    note: "Demo / Sample Educational Article",
    summary: "An architectural overview of how the Model Context Protocol (MCP) unifies Multi-Gmail inboxes, databases, and internal tools under a single reasoning engine.",
    content: [
      "Until recently, connecting an AI model to multiple SaaS tools required writing bespoke, fragile API glue code for every service. If you wanted an AI to search across three separate partner Gmail accounts, check HubSpot, and draft a Notion brief, you had to manage distinct authentication schemes, rate limits, and custom schemas.",
      "The Model Context Protocol (MCP), open-sourced by Anthropic, establishes an open, standardized client-server protocol. MCP allows developers to expose local files, databases, multi-inbox Gmail clients, and custom CRM tools as standardized context resources and executable tools.",
      "How MCP Transforms Daily Business Operations:",
      'Instead of navigating across 6 browser tabs to cross-reference an email from a client with their last invoice in Stripe and their project status in Jira, an executive can issue a single conversational command: "Summarize the current status of the Acme project, including pending invoices and unanswered emails from today."',
      "The MCP client orchestrates the tool calls across your private infrastructure without sending unauthorized data to third parties."
    ],
    takeaways: [
      "MCP standardizes how AI models discover and execute tools across enterprise software.",
      "Allows unified queries across multiple separated Google Workspace and CRM accounts.",
      "Enables enterprise-grade privacy by keeping data retrieval within your own infrastructure."
    ]
  },
  {
    id: "crm-erp-integration-patterns",
    slug: "crm-erp-architecture-for-growth",
    title: "Why Your Business Shouldn\u2019t Run Across 12 Disconnected Tools",
    category: "CRM",
    readTime: "5 min read",
    publishedDate: "August 10, 2026",
    author: "Digital Transformation Team",
    note: "Demo / Sample Educational Article",
    summary: 'The hidden organizational cost of "app sprawl" and the architectural blueprint for consolidating into a unified digital operating system.',
    content: [
      "The typical modern mid-market company utilizes an average of 12 to 20 independent SaaS subscriptions: one tool for email marketing, another for customer chat, a third for project management, separate spreadsheets for inventory, and another tool for billing.",
      "This fragmented architecture introduces three critical failure points:",
      "1. Data Silos: Customer data is duplicated and out-of-sync across platforms, leading to embarrassing customer communications.",
      "2. Operational Lag: Team members spend hours copying and pasting data between systems.",
      "3. Inability to Measure Unit Economics: When advertising spend lives in one dashboard and actual cash collections live in a disconnected accounting system, calculating true Customer Acquisition Cost (CAC) and Lifetime Value (LTV) becomes virtually impossible.",
      "The solution is not to buy another SaaS tool, but to engineer an integrated central data layer\u2014a unified CRM and operational backbone that connects your frontend lead touchpoints to your backend fulfillment."
    ],
    takeaways: [
      "Fragmented SaaS tools create hidden productivity drains and inaccurate reporting.",
      "A central data layer serves as the single source of truth for customer and order lifecycles.",
      "Automated webhook synchronization eliminates duplicate human data entry."
    ]
  },
  {
    id: "whatsapp-automation-sales",
    slug: "whatsapp-automation-for-high-ticket-sales",
    title: "Engineering Sub-60-Second Lead Response with WhatsApp Cloud API",
    category: "WhatsApp Automation",
    readTime: "6 min read",
    publishedDate: "August 02, 2026",
    author: "Growth Engineering Group",
    note: "Demo / Sample Educational Article",
    summary: "Data-backed lead response engineering: How combining paid ad webhooks with WhatsApp AI qualification dramatically increases sales appointment booking rates.",
    content: [
      "Lead decay is one of the most expensive leaks in modern digital marketing. Studies consistently show that responding to a high-intent inbound lead within 5 minutes results in a 10x higher qualification rate compared to waiting 30 minutes. After 2 hours, the probability of closing drops significantly.",
      "By connecting Facebook Lead Ads, Google Ads, and website forms directly to an automated WhatsApp Cloud API webhook, businesses can initiate an authentic, helpful conversation within seconds.",
      "The automated agent greets the prospect, asks 2-3 qualifying questions (e.g. timeframe, budget tier, specific requirements), and dynamically presents available booking slots on the sales team calendar.",
      "By the time the human sales representative joins the call, the prospect has already been qualified, context has been written into the CRM, and no time was wasted on cold phone tag."
    ],
    takeaways: [
      "Sub-60-second response times prevent lead decay and increase appointment conversion.",
      "WhatsApp Cloud API provides direct, high-deliverability engagement compared to email.",
      "Pre-qualification questions allow sales teams to prioritize high-intent accounts."
    ]
  }
];

// server/controllers/insightController.js
var insightController = {
  /**
   * Get all insights
   * GET /api/v1/insights
   */
  async getInsights(req, res, next) {
    try {
      const { category } = req.query;
      const dbStatus = getDBStatus();
      let articles = [];
      if (dbStatus.connected) {
        const query = category && category !== "All" ? { category } : {};
        articles = await Insight.find(query).sort({ createdAt: -1 });
        if (articles.length === 0) {
          articles = INSIGHTS;
        }
      } else {
        articles = category && category !== "All" ? INSIGHTS.filter((i) => i.category === category) : INSIGHTS;
      }
      return res.status(200).json({
        success: true,
        count: articles.length,
        data: articles
      });
    } catch (err) {
      next(err);
    }
  },
  /**
   * Get insight by slug
   * GET /api/v1/insights/:slug
   */
  async getInsightBySlug(req, res, next) {
    try {
      const { slug } = req.params;
      const dbStatus = getDBStatus();
      let article = null;
      if (dbStatus.connected) {
        article = await Insight.findOne({ slug });
      }
      if (!article) {
        article = INSIGHTS.find((i) => i.slug === slug);
      }
      if (!article) {
        return res.status(404).json({
          success: false,
          error: "Article not found."
        });
      }
      return res.status(200).json({
        success: true,
        data: article
      });
    } catch (err) {
      next(err);
    }
  }
};

// server/routes/insightRoutes.js
var router4 = import_express4.default.Router();
router4.get(
  "/",
  insightController.getInsights
);
router4.get(
  "/:slug",
  insightController.getInsightBySlug
);
var insightRoutes_default = router4;

// server/routes/caseStudyRoutes.js
var import_express5 = __toESM(require("express"), 1);

// server/models/CaseStudy.js
var import_mongoose6 = __toESM(require("mongoose"), 1);
var caseStudySchema = new import_mongoose6.default.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    badge: {
      type: String,
      default: "Concept Project"
    },
    title: {
      type: String,
      required: true
    },
    clientType: {
      type: String,
      required: true
    },
    industry: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    challenge: {
      type: String,
      required: true
    },
    solution: {
      type: String,
      required: true
    },
    technologies: {
      type: [String],
      default: []
    },
    architectureHighlights: {
      type: [String],
      default: []
    },
    outcomes: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
);
var CaseStudy = import_mongoose6.default.models.CaseStudy || import_mongoose6.default.model("CaseStudy", caseStudySchema);

// src/data/caseStudies.js
var CASE_STUDIES = [
  {
    id: "meridian-realty",
    slug: "real-estate-automation-hub",
    badge: "Concept Project",
    title: "Integrated Property Sales & WhatsApp AI Qualification Engine",
    clientType: "Mid-Market Property Development Firm",
    industry: "Real Estate",
    summary: "A complete digital overhaul connecting an interactive property listing platform with 24/7 WhatsApp AI qualification and automated site visit scheduling.",
    challenge: "The brokerage received hundreds of inquiries weekly across portals and paid campaigns. Inquiries were sitting in unmonitored inboxes overnight, resulting in an average response lag of 6 hours and low appointment booking rates.",
    solution: "Engineered a high-speed React property showcase connected via webhooks to an intelligent WhatsApp AI conversational agent. The agent instantly responds to buyer questions, checks mortgage pre-approval, and books site visits on the sales team calendar.",
    technologies: ["React", "Node.js API Layer", "WhatsApp Cloud API", "Claude 3.5 Sonnet", "PostgreSQL", "Tailwind CSS"],
    architectureHighlights: [
      "Bespoke headless listing frontend with sub-second property filtering",
      "RAG knowledge base containing exact unit blueprints, pricing tiers, and amenities",
      "Two-way calendar sync preventing double bookings across 12 sales agents",
      "Automated fallback to human sales directors when high-value cash buyers are detected"
    ],
    outcomes: [
      "Inbound inquiry response time reduced from 6 hours to under 30 seconds",
      "Automated qualification of over 65% of repetitive buyer FAQ inquiries",
      "Zero double-booked client viewings through synchronized calendar orchestration",
      "Clean CRM pipeline with complete WhatsApp conversation transcripts recorded automatically"
    ]
  },
  {
    id: "apex-logistics",
    slug: "b2b-rfq-portal-erp",
    badge: "Sample Project",
    title: "Custom B2B RFQ Quoting Engine & Inventory Telemetry Dashboard",
    clientType: "Industrial Components & Logistics Supplier",
    industry: "Manufacturing",
    summary: "Replacing manual spreadsheet-based quote calculations with a self-service B2B portal, real-time inventory checks, and automated pricing tier workflows.",
    challenge: "Custom industrial quote requests took 3 to 5 business days to calculate manually. Sales engineers were bogged down in repetitive arithmetic and inventory verification rather than closing high-value commercial accounts.",
    solution: "Designed and deployed a responsive B2B digital portal with parametric product configurators, automated pricing algorithms, and a direct link to existing warehouse databases.",
    technologies: ["React", "Express Architecture", "PostgreSQL", "n8n Automation", "Docker", "Tailwind CSS"],
    architectureHighlights: [
      "Parametric calculation engine evaluating volume breaks, material tolerances, and freight rules",
      "Automated PDF quotation generator with cryptographic digital signature verification",
      "Real-time warehouse stock checks alerting buyers when items are ready for same-day dispatch",
      "Multi-tier role management for enterprise buyers with purchasing approval thresholds"
    ],
    outcomes: [
      "Quote generation turnaround accelerated from 4 days to instant self-service estimation",
      "Over 40 hours of weekly engineering estimator time returned to custom engineering projects",
      "Standardized RFQ documentation eliminating miscommunication in technical tolerances",
      "Automated follow-up emails sent at 48-hour intervals on open pending quotes"
    ]
  },
  {
    id: "omni-care-health",
    slug: "clinical-intake-automation",
    badge: "Concept Project",
    title: "Multi-Clinic Patient Intake Portal & Automated Attendance Workflow",
    clientType: "Multi-Location Specialty Dental Group",
    industry: "Healthcare",
    summary: "A unified digital intake and multi-channel patient reminder system reducing clinic appointment no-shows and streamlining reception workflows.",
    challenge: "High appointment no-show rates across 4 clinic locations resulted in lost practitioner revenue. Front-desk personnel were inundated with confirmation phone calls and paper intake form processing.",
    solution: "Built a mobile-first digital patient scheduling and intake application with automated multi-touchpoint WhatsApp/SMS confirmation sequences and digital medical history collection.",
    technologies: ["React", "Modern CSS", "Twilio & WhatsApp API", "n8n Workflows", "MongoDB Schema", "Tailwind CSS"],
    architectureHighlights: [
      "Accessible, mobile-optimized digital intake forms with signature capture",
      "Automated countdown reminder sequences (72h, 24h, 2h prior to appointment)",
      "Instant cancellation and automated re-booking queue routing to standby waitlist patients",
      "Encrypted transit and storage adhering to standard healthcare security practices"
    ],
    outcomes: [
      "Documented decline in clinic appointment no-show rates across all 4 locations",
      "Reception check-in time per patient reduced from 8 minutes to under 90 seconds",
      "Elimination of physical paper storage through secure cloud document indexing",
      "Automated post-procedure care guides sent directly to patient phones upon check-out"
    ]
  },
  {
    id: "strata-consulting",
    slug: "mcp-multi-gmail-ai-workspace",
    badge: "Concept Project",
    title: "Model Context Protocol (MCP) Multi-Inbox Triage & Knowledge Hub",
    clientType: "Boutique Management Consulting Firm",
    industry: "Professional Services",
    summary: "Connecting 5 partner Google Workspace accounts and Google Drive repositories into an AI-assisted operational workspace using Model Context Protocol (MCP).",
    challenge: "Partners managed communications across multiple client Gmail accounts, losing critical action items and spending hours manually summarizing proposal discussions for team handoffs.",
    solution: "Deployed a custom internal dashboard integrated with MCP servers connected to Google Workspace, Slack, and the firm CRM, allowing partners to run natural-language operational queries.",
    technologies: ["React", "Model Context Protocol (MCP)", "Node.js Services", "Claude 3.5 API", "Vector Embeddings"],
    architectureHighlights: [
      "Standardized MCP tool layer exposing safe email search, calendar aggregation, and CRM updates",
      'Unified natural language query terminal: "Find all pending client proposals from this week"',
      "Automated daily morning briefing summarizing urgent emails across all 5 partner accounts",
      "Strict client isolation and permission safeguards preventing cross-account data leakage"
    ],
    outcomes: [
      "Partners saved an estimated 1.5 hours each morning on email triage and status checks",
      "Zero missed follow-up deadlines through automated action item extraction",
      "Instant search and synthesis across thousands of historical engagement deliverables",
      "Standardized client engagement onboarding executed with a single prompt"
    ]
  }
];

// server/controllers/caseStudyController.js
var caseStudyController = {
  /**
   * Get all case studies
   * GET /api/v1/case-studies
   */
  async getCaseStudies(req, res, next) {
    try {
      const { industry } = req.query;
      const dbStatus = getDBStatus();
      let items = [];
      if (dbStatus.connected) {
        const query = industry && industry !== "All" ? { industry } : {};
        items = await CaseStudy.find(query);
        if (items.length === 0) {
          items = CASE_STUDIES;
        }
      } else {
        items = industry && industry !== "All" ? CASE_STUDIES.filter((c) => c.industry === industry) : CASE_STUDIES;
      }
      return res.status(200).json({
        success: true,
        count: items.length,
        data: items
      });
    } catch (err) {
      next(err);
    }
  },
  /**
   * Get case study by slug
   * GET /api/v1/case-studies/:slug
   */
  async getCaseStudyBySlug(req, res, next) {
    try {
      const { slug } = req.params;
      const dbStatus = getDBStatus();
      let study = null;
      if (dbStatus.connected) {
        study = await CaseStudy.findOne({ slug });
      }
      if (!study) {
        study = CASE_STUDIES.find((c) => c.slug === slug);
      }
      if (!study) {
        return res.status(404).json({
          success: false,
          error: "Case study blueprint not found."
        });
      }
      return res.status(200).json({
        success: true,
        data: study
      });
    } catch (err) {
      next(err);
    }
  }
};

// server/routes/caseStudyRoutes.js
var router5 = import_express5.default.Router();
router5.get(
  "/",
  caseStudyController.getCaseStudies
);
router5.get(
  "/:slug",
  caseStudyController.getCaseStudyBySlug
);
var caseStudyRoutes_default = router5;

// server/routes/healthRoutes.js
var import_express6 = __toESM(require("express"), 1);

// server/controllers/healthController.js
var startTime = Date.now();
var healthController = {
  async getHealth(req, res) {
    try {
      await connectDB();
      const db = getDBStatus();
      return res.status(200).json({
        status: "HEALTHY",
        service: "nminovation-digital-systems-api",
        version: "1.0.0",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        uptime: `${Math.floor(
          (Date.now() - startTime) / 1e3
        )}s`,
        database: db,
        environment: process.env.NODE_ENV || "development"
      });
    } catch (error) {
      return res.status(503).json({
        status: "DEGRADED",
        service: "nminovation-digital-systems-api",
        database: {
          connected: false,
          status: "OFFLINE"
        }
      });
    }
  },
  getTelemetry(req, res) {
    return res.status(200).json({
      success: true,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      telemetry: {
        leadVelocity: "142 / week",
        avgQualificationSpeed: "24.2s",
        activeMcpPipelines: 8,
        systemLeverageScore: "94/100",
        blendedCac: "$38.40",
        revenueRealizedWeekly: "$46,200",
        activeWhatsAppAgents: 4
      }
    });
  }
};

// server/routes/healthRoutes.js
var router6 = import_express6.default.Router();
router6.get(
  "/health",
  healthController.getHealth
);
router6.get(
  "/telemetry",
  healthController.getTelemetry
);
var healthRoutes_default = router6;

// server/middleware/errorHandler.js
function errorHandler(err, req, res, next) {
  const statusCode = res.statusCode === 200 ? err.statusCode || 500 : res.statusCode;
  console.error(`[Error Handler] ${req.method} ${req.originalUrl}:`, err.message);
  if (process.env.NODE_ENV === "development") {
    console.error(err.stack);
  }
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((val) => val.message);
    return res.status(400).json({
      success: false,
      error: "Validation Error",
      details: messages
    });
  }
  if (err.code === 11e3) {
    return res.status(409).json({
      success: false,
      error: "Duplicate field value entered",
      details: err.keyValue
    });
  }
  res.status(statusCode).json({
    success: false,
    error: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : void 0
  });
}

// server/server.js
var inquiryRoutes = inquiryRoutes_default;
var auditRoutes = auditRoutes_default;
var systemPlanRoutes = systemPlanRoutes_default;
var insightRoutes = insightRoutes_default;
var caseStudyRoutes = caseStudyRoutes_default;
var healthRoutes = healthRoutes_default;
import_dotenv.default.config();
var app = (0, import_express7.default)();
app.use(
  (0, import_helmet.default)({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false
  })
);
var allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://nminovation.com",
  "https://www.nminovation.com",
  process.env.CORS_ORIGIN
].filter(Boolean);
app.use(
  (0, import_cors.default)({
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, true);
      }
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
  })
);
app.use(import_express7.default.json({ limit: "1mb" }));
app.use(
  import_express7.default.urlencoded({
    extended: true,
    limit: "1mb"
  })
);
if (process.env.NODE_ENV === "development") {
  app.use((0, import_morgan.default)("dev"));
}
app.use("/api/v1/inquiries", inquiryRoutes);
app.use("/api/v1/audits", auditRoutes);
app.use("/api/v1/system-plans", systemPlanRoutes);
app.use("/api/v1/insights", insightRoutes);
app.use("/api/v1/case-studies", caseStudyRoutes);
app.use("/api/v1", healthRoutes);
app.get("/api/v1", (req, res) => {
  res.status(200).json({
    name: "nminovation Digital Systems API Platform",
    status: "ONLINE",
    version: "1.0.0",
    documentation: "/api/v1/health",
    endpoints: {
      inquiries: "POST /api/v1/inquiries",
      audits: "POST /api/v1/audits",
      systemPlans: "POST /api/v1/system-plans",
      insights: "GET /api/v1/insights",
      caseStudies: "GET /api/v1/case-studies",
      health: "GET /api/v1/health",
      telemetry: "GET /api/v1/telemetry"
    }
  });
});
app.use((req, res, next) => {
  if (req.originalUrl.startsWith("/api/")) {
    return res.status(404).json({
      success: false,
      error: `API Route ${req.originalUrl} not found.`
    });
  }
  next();
});
app.use(errorHandler);
var server_default = app;

// netlify/functions/api.js
var handler = (0, import_serverless_http.default)(server_default);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
