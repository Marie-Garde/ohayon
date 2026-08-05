import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '0sf47gcp',
    dataset: 'production',
  },
  // URL du Studio hébergé par Sanity -> https://ohayon.sanity.studio
  studioHost: 'ohayon',
  deployment: { autoUpdates: true },
})
