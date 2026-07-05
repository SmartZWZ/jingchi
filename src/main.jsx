import React from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  Camera,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Database,
  FileText,
  Fingerprint,
  Gauge,
  HeartPulse,
  History,
  LockKeyhole,
  MonitorSmartphone,
  Network,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Wifi,
} from "lucide-react";
import "./styles.css";

const capabilities = [
  {
    icon: Camera,
    title: "标准化口腔图像采集",
    text: "按上颌、下颌、左右咬合区和后牙局部完成一组视角采集，图像自动绑定用户、设备、时间、视角和质量参数。",
  },
  {
    icon: Gauge,
    title: "距离与姿态辅助引导",
    text: "融合 ToF 距离与 6 轴 IMU 姿态数据，在屏幕和语音中提示靠近、远离、倾斜和保持稳定。",
  },
  {
    icon: Activity,
    title: "本地拍摄质量检测",
    text: "在端侧识别过暗、过曝、模糊、反光、牙齿区域过小和视角偏差，减少无效上传。",
  },
  {
    icon: BrainCircuit,
    title: "离线轻量模型初筛",
    text: "ESP32-P4 运行量化视觉模型，在无网络时完成牙齿区域分割和疑似风险区域粗筛。",
  },
  {
    icon: Cloud,
    title: "云端视觉复核",
    text: "云端服务对多张标准视角图像进行精细分割、风险检测、清洁度评估和端侧结果复核。",
  },
  {
    icon: FileText,
    title: "AI 报告与护理建议",
    text: "大语言模型把结构化标签转化为通俗报告、刷牙重点区域、复查提醒和科普内容。",
  },
];

const scenes = ["家庭口腔自查", "校园健康筛查", "儿童刷牙习惯培养", "社区科普活动", "老年口腔管理"];

const architecture = [
  {
    icon: MonitorSmartphone,
    title: "设备端",
    text: "ESP32-P4、MIPI-CSI 摄像头、ToF、IMU、LED 补光、LVGL 触摸界面。",
  },
  {
    icon: Wifi,
    title: "传输层",
    text: "Wi-Fi、HTTPS、MQTT 与 WebSocket 同步图像、状态、报告和设备事件。",
  },
  {
    icon: Network,
    title: "云端服务",
    text: "FastAPI / Node.js 承接上传、任务队列、视觉推理、报告生成和账号权限。",
  },
  {
    icon: Database,
    title: "数据层",
    text: "对象存储保存图像与标注图，数据库保存用户、成员、设备、报告和历史索引。",
  },
];

const milestones = [
  "官网与网页端原型",
  "图像上传与报告数据结构",
  "端侧采集界面与质量检测",
  "云端视觉模型服务",
  "App 与 Web 历史报告",
  "演示联调与隐私提示完善",
];

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="齿镜首页">
          <span className="brand-mark">
            <Stethoscope size={19} />
          </span>
          <span>
            <strong>齿镜</strong>
            <small>ChiJing</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="官网导航">
          <a href="#features">能力</a>
          <a href="#architecture">架构</a>
          <a href="#security">安全</a>
          <a href="#roadmap">路线图</a>
        </nav>
        <a className="nav-action" href="#demo">
          演示入口
          <ChevronRight size={16} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={16} />
            基于 ESP32-P4 的端云协同口腔健康筛查系统
          </div>
          <h1>把口腔观察前移到日常，把筛查报告交给端云协同完成。</h1>
          <p>
            齿镜面向家庭、校园与社区场景，结合手持口腔探头、端侧轻量模型和云端视觉复核，
            帮助非专业用户完成标准化采集、风险提示和护理建议查看。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#demo">
              查看网页端原型
              <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#architecture">
              了解系统架构
            </a>
          </div>
          <div className="hero-metrics" aria-label="系统关键能力">
            <span>
              <strong>1080P</strong>
              实时预览目标
            </span>
            <span>
              <strong>5+</strong>
              标准采集视角
            </span>
            <span>
              <strong>端+云</strong>
              双层分析
            </span>
          </div>
        </div>

        <div className="hero-visual" aria-label="齿镜设备与云端分析主视觉">
          <img src="/assets/chijing-hero.png" alt="齿镜口腔筛查设备与云端分析界面" />
          <div className="status-panel top">
            <span className="pulse" />
            距离合适 · 姿态稳定
          </div>
          <div className="status-panel bottom">
            <CheckCircle2 size={17} />
            图像质量通过
          </div>
        </div>
      </section>

      <section className="scene-strip" aria-label="适用场景">
        {scenes.map((scene) => (
          <span key={scene}>{scene}</span>
        ))}
      </section>

      <section className="section" id="features">
        <div className="section-heading">
          <span className="section-kicker">核心能力</span>
          <h2>从“拍得清楚”到“看得明白”的完整闭环</h2>
          <p>
            系统重点不是替代医生诊断，而是把采集质量、风险提示、历史追踪和护理科普做成可演示、可扩展的 AIoT 流程。
          </p>
        </div>
        <div className="feature-grid">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <article className="feature-card" key={title}>
              <div className="icon-box">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-band">
        <div>
          <span className="section-kicker">网页端体验</span>
          <h2>给用户看的不是算法输出，而是一份能行动的筛查记录。</h2>
          <p>
            网页端将展示本次筛查结果、风险区域标注图、端侧初筛与云端复核对比、护理建议、历史趋势和家庭成员档案。
          </p>
        </div>
        <div className="report-preview">
          <div className="report-header">
            <HeartPulse size={22} />
            <div>
              <strong>本次筛查报告</strong>
              <span>仅供健康筛查参考</span>
            </div>
          </div>
          <div className="risk-list">
            <span>左侧咬合区：建议复查</span>
            <span>后牙局部：清洁重点</span>
            <span>图像质量：合格</span>
          </div>
          <div className="trend-row">
            <History size={18} />
            近 1 个月风险变化与复查提醒
          </div>
        </div>
      </section>

      <section className="section" id="architecture">
        <div className="section-heading">
          <span className="section-kicker">系统架构</span>
          <h2>端侧保证可用性，云端负责精细分析。</h2>
          <p>
            ESP32-P4 承担实时预览、传感器融合、质量检测和轻量初筛；服务器侧承接更重的视觉模型、大模型报告和多用户数据管理。
          </p>
        </div>
        <div className="architecture-flow">
          {architecture.map(({ icon: Icon, title, text }, index) => (
            <article className="architecture-item" key={title}>
              <div className="step-number">0{index + 1}</div>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="security-section" id="security">
        <div className="security-copy">
          <span className="section-kicker">隐私与边界</span>
          <h2>健康相关数据要谨慎，报告表达也要克制。</h2>
          <p>
            口腔图像与筛查报告按用户、家庭成员、设备和报告 ID 隔离；上传前需要授权，传输过程使用加密通道，历史记录支持删除。
          </p>
        </div>
        <div className="security-list">
          <div>
            <ShieldCheck size={20} />
            <span>HTTPS 加密传输</span>
          </div>
          <div>
            <Fingerprint size={20} />
            <span>账号与成员权限隔离</span>
          </div>
          <div>
            <LockKeyhole size={20} />
            <span>报告避免医学确诊表述</span>
          </div>
          <div>
            <Users size={20} />
            <span>家庭与校园模式分开管理</span>
          </div>
        </div>
      </section>

      <section className="section roadmap" id="roadmap">
        <div className="section-heading">
          <span className="section-kicker">开发路线</span>
          <h2>先做可演示闭环，再逐步接入硬件和模型。</h2>
        </div>
        <div className="timeline">
          {milestones.map((item, index) => (
            <div className="timeline-item" key={item}>
              <span>{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="demo-section" id="demo">
        <div>
          <span className="section-kicker">Demo</span>
          <h2>官网先上线，网页端使用页下一步接入。</h2>
          <p>
            当前官网用于课程展示、项目说明和演示入口。后续网页端会接入登录、成员档案、图像上传、AI 报告和历史分析。
          </p>
        </div>
        <a className="primary-button" href="#" aria-label="网页端使用页占位入口">
          进入网页端
          <ArrowRight size={18} />
        </a>
      </section>

      <footer>
        <div className="brand footer-brand">
          <span className="brand-mark">
            <Stethoscope size={19} />
          </span>
          <span>
            <strong>齿镜</strong>
            <small>端云协同口腔健康筛查系统</small>
          </span>
        </div>
        <p>筛查结果仅供健康管理参考，不作为医学诊断依据。</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
