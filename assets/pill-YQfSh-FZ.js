const A="data:image/png;base64,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",b="/react-project_admin-dashboard/assets/pill-8E00Khzj.png";export{A as l,b as p};
