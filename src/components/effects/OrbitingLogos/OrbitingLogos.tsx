/**
 * Animated orbiting logos. The "sun" is positioned at the top-right corner.
 * Each logo independently animates along its circular path using CSS custom
 * properties — no parent rotation or counter-rotation needed, so logos
 * are ALWAYS perfectly horizontal.
 */

import aws from '@assets/logos/integrations/aws-svgrepo-com.svg';
import azure from '@assets/logos/integrations/azure-svgrepo-com.svg';
import gcp from '@assets/logos/integrations/gcp-svgrepo-com.svg';
import github from '@assets/logos/integrations/github-icon-1-logo-svgrepo-com.svg';
import gitlab from '@assets/logos/integrations/gitlab-svgrepo-com.svg';
import docker from '@assets/logos/integrations/docker-svgrepo-com.svg';
import kubernetes from '@assets/logos/integrations/kubernetes-svgrepo-com.svg';
import snowflake from '@assets/logos/integrations/snowflake-icon.svg';
import postgres from '@assets/logos/integrations/postgresql-svgrepo-com.svg';
import mongo from '@assets/logos/integrations/mongo-svgrepo-com.svg';
import redis from '@assets/logos/integrations/redis-svgrepo-com.svg';
import supabase from '@assets/logos/integrations/supabase-icon.svg';
import oracle from '@assets/logos/integrations/oracle-svgrepo-com.svg';
import cassandra from '@assets/logos/integrations/cassandra-svgrepo-com.svg';
import clickhouse from '@assets/logos/integrations/Clickhouse--Streamline-Simple-Icons.svg';
import notion from '@assets/logos/integrations/notion-svgrepo-com.svg';
import confluence from '@assets/logos/integrations/confluence-svgrepo-com.svg';
import linear from '@assets/logos/integrations/linear-svgrepo-com.svg';
import jira from '@assets/logos/integrations/jira-svgrepo-com.svg';
import slack from '@assets/logos/integrations/slack-svgrepo-com.svg';
import discord from '@assets/logos/integrations/discord-icon-svgrepo-com.svg';
import gmail from '@assets/logos/integrations/gmail-svgrepo-com.svg';
import teams from '@assets/logos/integrations/microsoft-teams-svgrepo-com.svg';
import twilio from '@assets/logos/integrations/twilio-svgrepo-com.svg';
import outlook from '@assets/logos/integrations/ms-outlook-svgrepo-com.svg';
import sharepoint from '@assets/logos/integrations/ms-sharepoint-svgrepo-com.svg';
import hubspot from '@assets/logos/integrations/hubspot-svgrepo-com.svg';
import salesforce from '@assets/logos/integrations/salesforce-svgrepo-com.svg';
import shopify from '@assets/logos/integrations/shopify-svgrepo-com.svg';
import zendesk from '@assets/logos/integrations/zendesk-svgrepo-com.svg';
import paypal from '@assets/logos/integrations/paypal-icon.svg';
import razorpay from '@assets/logos/integrations/razorpay.svg';
import wise from '@assets/logos/integrations/wise.svg';
import datadog from '@assets/logos/integrations/datadoghq-icon.svg';
import grafana from '@assets/logos/integrations/grafana-icon.svg';
import prometheus from '@assets/logos/integrations/prometheusio-icon.svg';
import sentry from '@assets/logos/integrations/sentryio-icon.svg';
import pagerduty from '@assets/logos/integrations/pagerduty-icon (1).svg';
import elastic from '@assets/logos/integrations/elastic-svgrepo-com.svg';
import hashicorp from '@assets/logos/integrations/hashicorp-svgrepo-com.svg';
import servicenow from '@assets/logos/integrations/servicenow-icon.svg';
import atlassian from '@assets/logos/integrations/atlassian-svgrepo-com.svg';
import dropbox from '@assets/logos/integrations/dropbox-svgrepo-com.svg';
import mcp from '@assets/logos/integrations/model-context-protocol-mono.svg';
import replit from '@assets/logos/integrations/replit.svg';
import sap from '@assets/logos/integrations/sap-icon.svg';
import workday from '@assets/logos/integrations/workday-icon.svg';
import zoho from '@assets/logos/integrations/zoho-svgrepo-com.svg';
import gke from '@assets/logos/integrations/gke-on-prem-svgrepo-com.svg';
import api from '@assets/logos/integrations/api-interface-svgrepo-com.svg';
import server from '@assets/logos/integrations/server-svgrepo-com.svg';

interface OrbitItem {
  name: string;
  icon: string;
}

interface OrbitRing {
  radius: number;
  offsetDeg: number;
  items: OrbitItem[];
}

const ORBIT_DURATION = 120; // seconds — same for all

const ORBITS: OrbitRing[] = [
  {
    radius: 140,
    offsetDeg: 0,
    items: [
      { name: 'AWS', icon: aws },
      { name: 'Azure', icon: azure },
      { name: 'GCP', icon: gcp },
      { name: 'Docker', icon: docker },
      { name: 'Kubernetes', icon: kubernetes },
      { name: 'GKE', icon: gke },
    ],
  },
  {
    radius: 240,
    offsetDeg: 137.5,
    items: [
      { name: 'GitHub', icon: github },
      { name: 'GitLab', icon: gitlab },
      { name: 'Snowflake', icon: snowflake },
      { name: 'PostgreSQL', icon: postgres },
      { name: 'MongoDB', icon: mongo },
      { name: 'Redis', icon: redis },
      { name: 'Oracle', icon: oracle },
      { name: 'Cassandra', icon: cassandra },
    ],
  },
  {
    radius: 340,
    offsetDeg: 275,
    items: [
      { name: 'Supabase', icon: supabase },
      { name: 'ClickHouse', icon: clickhouse },
      { name: 'Notion', icon: notion },
      { name: 'Confluence', icon: confluence },
      { name: 'Linear', icon: linear },
      { name: 'Jira', icon: jira },
      { name: 'Slack', icon: slack },
      { name: 'Discord', icon: discord },
      { name: 'Gmail', icon: gmail },
      { name: 'Teams', icon: teams },
    ],
  },
  {
    radius: 440,
    offsetDeg: 52.5,
    items: [
      { name: 'Twilio', icon: twilio },
      { name: 'Outlook', icon: outlook },
      { name: 'SharePoint', icon: sharepoint },
      { name: 'HubSpot', icon: hubspot },
      { name: 'Salesforce', icon: salesforce },
      { name: 'Shopify', icon: shopify },
      { name: 'Zendesk', icon: zendesk },
      { name: 'PayPal', icon: paypal },
      { name: 'Razorpay', icon: razorpay },
      { name: 'Wise', icon: wise },
      { name: 'ServiceNow', icon: servicenow },
    ],
  },
  {
    radius: 560,
    offsetDeg: 190,
    items: [
      { name: 'Datadog', icon: datadog },
      { name: 'Grafana', icon: grafana },
      { name: 'Prometheus', icon: prometheus },
      { name: 'Sentry', icon: sentry },
      { name: 'PagerDuty', icon: pagerduty },
      { name: 'Elastic', icon: elastic },
      { name: 'HashiCorp', icon: hashicorp },
      { name: 'Atlassian', icon: atlassian },
      { name: 'Dropbox', icon: dropbox },
      { name: 'MCP', icon: mcp },
      { name: 'Replit', icon: replit },
      { name: 'SAP', icon: sap },
      { name: 'Workday', icon: workday },
      { name: 'Zoho', icon: zoho },
      { name: 'API', icon: api },
      { name: 'Server', icon: server },
    ],
  },
];

/**
 * Individual orbiting logo. Uses CSS offset-path to move along a circle
 * WITHOUT any rotation — the element stays perfectly upright at all times.
 */
function OrbitLogo({
  item,
  radius,
  startAngle,
}: {
  item: OrbitItem;
  radius: number;
  startAngle: number;
}) {
  // Use negative animation-delay to start each logo at its correct position
  // along the circular path. offset-rotate: 0deg keeps it upright always.
  const delaySeconds = -(startAngle / 360) * ORBIT_DURATION;

  return (
    <div
      className="absolute"
      style={{
        top: '50%',
        left: '50%',
        marginTop: -24,
        marginLeft: -24,
        offsetPath: `circle(${radius}px)`,
        offsetRotate: '0deg',
        animation: `orbitMove ${ORBIT_DURATION}s linear infinite`,
        animationDelay: `${delaySeconds}s`,
      }}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-[#0b0d0e]/[0.06]">
        <img
          src={item.icon}
          alt={item.name}
          className="w-7 h-7 object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
}

export function OrbitingLogos() {
  return (
    <div className="relative w-full h-full overflow-visible">
      {/* Anchor: top-right corner */}
      <div className="absolute top-0 right-0">
        {/* Sun — only SW quarter visible */}
        <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#ffaa00]" />
        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#ffaa00]" />

        {/* Orbit rings */}
        {ORBITS.map((orbit, orbitIdx) => (
          <div
            key={orbitIdx}
            className="absolute rounded-full border border-white/[0.1]"
            style={{
              width: orbit.radius * 2,
              height: orbit.radius * 2,
              top: -orbit.radius,
              right: -orbit.radius,
            }}
          >
            {orbit.items.map((item, itemIdx) => {
              const angle = orbit.offsetDeg + (360 / orbit.items.length) * itemIdx;
              return (
                <OrbitLogo
                  key={item.name}
                  item={item}
                  radius={orbit.radius}
                  startAngle={angle}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
