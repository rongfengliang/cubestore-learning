cube(`OcOrder`, {
  sql: `SELECT * FROM public.oc_order`,
  
  joins: {
    
  },
  preAggregations: {
    main: {
      type: `originalSql`,
      external: true
    },
  },
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, submitterid, submittername, submitdate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    invitecode: {
      sql: `invitecode`,
      type: `string`
    },
    
    orderno: {
      sql: `orderno`,
      type: `string`
    },
    
    submitterid: {
      sql: `submitterid`,
      type: `string`
    },
    
    submittername: {
      sql: `submittername`,
      type: `string`
    },
    
    submitdate: {
      sql: `submitdate`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
