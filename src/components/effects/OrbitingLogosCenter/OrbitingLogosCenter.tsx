/**
 * Centered orbiting logos — logos orbit around the center of the viewport.
 * Uses CSS offset-path so logos stay perfectly horizontal.
 * Golden angle offsets ensure no radial clustering between adjacent rings.
 */

import aws from '@assets/icons/aws-svgrepo-com.svg';
import azure from '@assets/icons/azure-svgrepo-com.svg';
import gcp from '@assets/icons/gcp-svgrepo-com.svg';
import github from '@assets/icons/github-icon-1-logo-svgrepo-com.svg';
import gitlab from '@assets/icons/gitlab-svgrepo-com.svg';
import docker from '@assets/icons/docker-svgrepo-com.svg';
import kubernetes from '@assets/icons/kubernetes-svgrepo-com.svg';
import snowflake from '@assets/icons/snowflake-icon.svg';
import postgres from '@assets/icons/postgresql-svgrepo-com.svg';
import mongo from '@assets/icons/mongo-svgrepo-com.svg';
import redis from '@assets/icons/redis-svgrepo-com.svg';
import supabase from '@assets/icons/supabase-icon.svg';
import oracle from '@assets/icons/oracle-svgrepo-com.svg';
import cassandra from '@assets/icons/cassandra-svgrepo-com.svg';
import clickhouse from '@assets/icons/Clickhouse--Streamline-Simple-Icons.svg';
import notion from '@assets/icons/notion-svgrepo-com.svg';
import confluence from '@assets/icons/confluence-svgrepo-com.svg';
import linear from '@assets/icons/linear-svgrepo-com.svg';
import jira from '@assets/icons/jira-svgrepo-com.svg';
import slack from '@assets/icons/slack-svgrepo-com.svg';
import discord from '@assets/icons/discord-icon-svgrepo-com.svg';
import gmail from '@assets/icons/gmail-svgrepo-com.svg';
import teams from '@assets/icons/microsoft-teams-svgrepo-com.svg';
import twilio from '@assets/icons/twilio-svgrepo-com.svg';
import outlook from '@assets/icons/ms-outlook-svgrepo-com.svg';
import sharepoint from '@assets/icons/ms-sharepoint-svgrepo-com.svg';
import hubspot from '@assets/icons/hubspot-svgrepo-com.svg';
import salesforce from '@assets/icons/salesforce-svgrepo-com.svg';
import shopify from '@assets/icons/shopify-svgrepo-com.svg';
import zendesk from '@assets/icons/zendesk-svgrepo-com.svg';
import paypal from '@assets/icons/paypal-icon.svg';
import razorpay from '@assets/icons/razorpay.svg';
import wise from '@assets/icons/wise.svg';
import datadog from '@assets/icons/datadoghq-icon.svg';
import grafana from '@assets/icons/grafana-icon.svg';
import prometheus from '@assets/icons/prometheusio-icon.svg';
import sentry from '@assets/icons/sentryio-icon.svg';
import pagerduty from '@assets/icons/pagerduty-icon (1).svg';
import elastic from '@assets/icons/elastic-svgrepo-com.svg';
import hashicorp from '@assets/icons/hashicorp-svgrepo-com.svg';
import servicenow from '@assets/icons/servicenow-icon.svg';
import atlassian from '@assets/icons/atlassian-svgrepo-com.svg';
import dropbox from '@assets/icons/dropbox-svgrepo-com.svg';
import mcp from '@assets/icons/model-context-protocol-mono.svg';
import replit from '@assets/icons/replit.svg';
import sap from '@assets/icons/sap-icon.svg';
import workday from '@assets/icons/workday-icon.svg';
import zoho from '@assets/icons/zoho-svgrepo-com.svg';
import gke from '@assets/icons/gke-on-prem-svgrepo-com.svg';
import api from '@assets/icons/api-interface-svgrepo-com.svg';
import server from '@assets/icons/server-svgrepo-com.svg';

interface OrbitItem {
  name: string;
  icon: string;
}

interface OrbitRing {
  radius: number;
  offsetDeg: number;
  items: OrbitItem[];
}

const ORBIT_DURATION = 120;

// Golden angle offsets: 0, 137.5, 275, 52.5, 190
const ORBITS: OrbitRing[] = [
  {
    radius: 120,
    offsetDeg: 0,
    items: [
      { name: 'AWS', icon: aws },
      { name: 'Azure', icon: azure },
      { name: 'GCP', icon: gcp },
      { name: 'Docker', icon: docker },
      { name: 'Kubernetes', icon: kubernetes },
    ],
  },
  {
    radius: 200,
    offsetDeg: 137.5,
    items: [
      { name: 'GitHub', icon: github },
      { name: 'GitLab', icon: gitlab },
      { name: 'Snowflake', icon: snowflake },
      { name: 'PostgreSQL', icon: postgres },
      { name: 'MongoDB', icon: mongo },
      { name: 'Redis', icon: redis },
      { name: 'GKE', icon: gke },
    ],
  },
  {
    radius: 290,
    offsetDeg: 275,
    items: [
      { name: 'Supabase', icon: supabase },
      { name: 'Oracle', icon: oracle },
      { name: 'Cassandra', icon: cassandra },
      { name: 'ClickHouse', icon: clickhouse },
      { name: 'Notion', icon: notion },
      { name: 'Confluence', icon: confluence },
      { name: 'Linear', icon: linear },
      { name: 'Jira', icon: jira },
      { name: 'Slack', icon: slack },
    ],
  },
  {
    radius: 380,
    offsetDeg: 52.5,
    items: [
      { name: 'Discord', icon: discord },
      { name: 'Gmail', icon: gmail },
      { name: 'Teams', icon: teams },
      { name: 'Twilio', icon: twilio },
      { name: 'Outlook', icon: outlook },
      { name: 'SharePoint', icon: sharepoint },
      { name: 'HubSpot', icon: hubspot },
      { name: 'Salesforce', icon: salesforce },
      { name: 'Shopify', icon: shopify },
      { name: 'Zendesk', icon: zendesk },
      { name: 'PayPal', icon: paypal },
    ],
  },
  {
    radius: 480,
    offsetDeg: 190,
    items: [
      { name: 'Razorpay', icon: razorpay },
      { name: 'Wise', icon: wise },
      { name: 'Datadog', icon: datadog },
      { name: 'Grafana', icon: grafana },
      { name: 'Prometheus', icon: prometheus },
      { name: 'Sentry', icon: sentry },
      { name: 'PagerDuty', icon: pagerduty },
      { name: 'Elastic', icon: elastic },
      { name: 'HashiCorp', icon: hashicorp },
      { name: 'ServiceNow', icon: servicenow },
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

function OrbitLogo({
  item,
  radius,
  startAngle,
}: {
  item: OrbitItem;
  radius: number;
  startAngle: number;
}) {
  const delaySeconds = -(startAngle / 360) * ORBIT_DURATION;

  return (
    <div
      className="absolute"
      style={{
        top: '50%',
        left: '50%',
        marginTop: -20,
        marginLeft: -20,
        offsetPath: `circle(${radius}px)`,
        offsetRotate: '0deg',
        animation: `orbitMove ${ORBIT_DURATION}s linear infinite`,
        animationDelay: `${delaySeconds}s`,
      }}
    >
      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-[#0b0d0e]/[0.06]">
        <img
          src={item.icon}
          alt={item.name}
          className="w-6 h-6 object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
}

export function OrbitingLogosCenter() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Orbit rings + logos — centered */}
      <div className="relative">
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#0b0d0e]/10" />

        {ORBITS.map((orbit, orbitIdx) => (
          <div
            key={orbitIdx}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0b0d0e]/[0.06]"
            style={{
              width: orbit.radius * 2,
              height: orbit.radius * 2,
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
