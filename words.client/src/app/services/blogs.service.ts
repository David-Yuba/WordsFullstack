import { Injectable } from "@angular/core";

export enum ElementType {
  UNDEFINED,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P
}

export interface BlogSection {
  elementType: ElementType;
  elementContent: string;
}
export type Blog ={
    id: number;
    title: string;
    date_created: string;
    written_by: string;
    image: string;
    short_description: string;
    tags: Array<string>;
    content: string;
}
export type Blogs = Array<Blog>
export interface BlogInfo {
  id: number;
  title: string;
  date_created: string;
  written_by: string;
  tags: Array<string>;
}


@Injectable({ providedIn: "root"})
export default class BlogData {
  private b = {
    emptyBlog: [{
      "id": -1,
      "title": "Blog doesn't exist",
      "date_created": "0",
      "written_by": "0",
      "image": "0",
      "tags": [""],
      "short_description": "",
      "content": ""
    }],
    home: [{
      "title": "The Future of Web Development in 2025",
      "date_created": "2025-06-01",
      "written_by": "John Doe",
      "image": "https://placehold.co/320x240",
      "short_description": "An in-depth look at the technological advancements shaping web development in 2025, including AI-driven coding, performance optimization, and next-generation architecture.",
      "content": "<h1>The Future of Web Development in 2025</h1><p>Web development continues to evolve rapidly, bringing new tools, frameworks, and methodologies that reshape how developers build for the modern web.</p><h2>1. The Rise of AI-Assisted Coding</h2><p>Artificial intelligence is now deeply integrated into development workflows. Tools that generate code, identify bugs, and optimize performance are becoming standard.</p><h3>1.1 Smarter Code Generation</h3><p>Developers can use AI systems to generate entire components, reducing development time and increasing consistency across projects.</p><h4>1.1.1 Real-Time Debugging</h4><p>AI-powered debugging systems can automatically detect and fix common issues, making development faster and more efficient.</p><h2>2. Performance as a Priority</h2><p>Users expect instant loading times and seamless interactions, pushing developers to adopt performance-first strategies.</p><h3>2.1 Edge Computing and CDNs</h3><p>Delivering data from servers located closer to users significantly improves application responsiveness.</p><h4>2.1.1 Reduced Latency</h4><p>With edge architecture, latency is reduced, improving user experience and overall site performance.</p><h5>Advanced Optimization Techniques</h5><p>Developers are employing techniques such as prefetching, code splitting, and selective hydration to enhance load times.</p><h6>Conclusion</h6><p>The future of web development is driven by innovation, automation, and performance. As tools and technologies advance, developers will continue to push the boundaries of what’s possible on the web.</p>"
    }],
    about: [{
      "title": "The Evolution of Mobile Applications in 2025",
      "date_created": "2025-06-02",
      "written_by": "John Doe",
      "image": "https://placehold.co/320x240",
      "short_description": "A breakdown of the trends revolutionizing mobile app development in 2025, from cross-platform technologies to biometric security and zero-trust mobile architecture.",
      "content": "<h1>The Evolution of Mobile Applications in 2025</h1><p>Mobile app development is entering a new era, shaped by smarter devices, faster networks, and increasingly personalized user experiences.</p><h2>1. The Growth of Cross-Platform Frameworks</h2><p>Developers are adopting unified frameworks that allow apps to run seamlessly on multiple operating systems with minimal code duplication.</p><h3>1.1 Unified Design Systems</h3><p>Standardized design libraries ensure consistent interfaces across platforms, improving both developer efficiency and user familiarity.</p><h4>1.1.1 Automated UI Adaptation</h4><p>Modern frameworks automatically adjust layouts based on screen size, orientation, and device capabilities, reducing manual work.</p><h2>2. Enhanced Security and Privacy</h2><p>With rising concerns about data privacy, mobile applications are placing stronger emphasis on encryption, secure APIs, and transparent data practices.</p><h3>2.1 Biometric Authentication Advances</h3><p>New biometric methods—such as multimodal facial recognition and behavioral patterns—are being used to provide stronger identity verification.</p><h4>2.1.1 Continuous Authentication</h4><p>Apps can now validate users continuously in the background using subtle behavior cues, enhancing security without disrupting the experience.</p><h5>Zero-Trust Mobile Architecture</h5><p>Developers are implementing zero-trust principles that verify every request, reducing vulnerabilities across distributed mobile environments.</p><h6>Conclusion</h6><p>Mobile app development in 2025 focuses on security, efficiency, and seamless cross-platform experiences. As technologies mature, the boundary between devices continues to blur, creating more unified and intelligent mobile ecosystems.</p>"
    }],
    blogs: [
      {
        "id": 0,
        "title": "Understanding Async JavaScript",
        "date_created": "2025-01-12",
        "written_by": "John Doe",
        "image": "https://placehold.co/320x240",
        "short_description": "A clear introduction to async programming in JavaScript, covering concepts that help developers write more efficient and responsive web applications.",
        "tags": ["JavaScript", "Web Development", "Frontend", "Best Practices"],
        "content": "<h1>This is a placeholder generated by AI</h1><h1>Understanding Async JavaScript</h1><p>Asynchronous JavaScript is at the heart of modern web development. It allows applications to perform non-blocking operations—such as fetching data, reading files, or waiting for timers—without freezing the UI or stopping the rest of the program.</p><h2>Why Async Matters</h2><p>JavaScript is single-threaded, meaning it can only execute one piece of code at a time. Without asynchronous capabilities, every long-running task would block the main thread.</p><h3>Common Async Patterns</h3><ul><li>Callbacks</li><li>Promises</li><li>async/await</li><li>Event Emitters</li></ul><h2>Promises and the Event Loop</h2><p>Promises introduced a cleaner way to handle async operations compared to callbacks. They use microtasks, which are executed with high priority in the event loop.</p><h3>Chaining Promises</h3><p>Chaining allows developers to sequence asynchronous steps without deeply nested code.</p><h2>Async/Await</h2><p>Introduced in ES2017, async/await provides a synchronous-style syntax for asynchronous operations, improving readability and maintainability.</p><h3>Error Handling</h3><p>Using <code>try...catch</code> with async/await simplifies async error handling more than the <code>.catch()</code> method on promises.</p><h2>Real-World Use Cases</h2><ul><li>Fetching data from APIs</li><li>Processing large files</li><li>Handling time-based events</li><li>Database operations</li></ul><h2>Conclusion</h2><p>Async JavaScript gives developers the tools to build fast, responsive experiences. Understanding the event loop, promises, and async/await is essential for mastering modern JavaScript development.</p>"
      },
      {
        "id": 1,
        "title": "Why Design Systems Matter",
        "date_created": "2025-02-03",
        "written_by": "John Doe",
        "image": "https://placehold.co/320x240",
        "short_description": "An overview of why design systems are essential for scaling digital products, ensuring consistency, and improving collaboration across teams.",
        "tags": ["UI/UX", "Web Development", "Best Practices"],
        "content": "<h1>This is a placeholder generated by AI</h1><h1>Why Design Systems Matter</h1><p>Design systems have become foundational to scaling modern digital products. They allow organizations to maintain consistent visual language, streamline production, and improve collaboration across disciplines.</p><h2>What Is a Design System?</h2><p>A design system is a collection of reusable components, guidelines, and standards that form the backbone of an application's interface.</p><h3>Key Components</h3><ul><li>Style guides</li><li>Component libraries</li><li>Documentation</li><li>Brand foundations</li></ul><h2>Consistency at Scale</h2><p>As teams grow and more people contribute to an interface, inconsistency becomes a real threat. Design systems prevent this by offering a single source of truth.</p><h3>Developer Benefits</h3><p>Engineers can build UI faster using pre-defined components, reducing bugs and UI regressions.</p><h2>Improving Collaboration</h2><p>Design systems bring designers, developers, and product managers together under a shared vocabulary.</p><h3>Cross-Team Alignment</h3><p>Teams spend less time debating UI details and more time focusing on user value.</p><h2>Maintaining a Design System</h2><p>A design system evolves over time. Governance models ensure updates are intentional and documented.</p><h2>Conclusion</h2><p>Design systems empower organizations to work faster, deliver more consistent experiences, and ensure high quality at scale.</p>"
      },
      {
        "id": 2,
        "title": "A Beginner's Guide to Web Accessibility",
        "date_created": "2025-03-18",
        "written_by": "John Doe",
        "image": "https://placehold.co/320x240",
        "short_description": "A friendly introduction to web accessibility fundamentals.",
        "tags": ["Accessibility", "UI/UX", "Web Development", "Best Practices"],
        "content": "<h1>This is a placeholder generated by AI</h1><h1>A Beginner's Guide to Web Accessibility</h1><p>Web accessibility ensures that digital experiences are usable by everyone, including people with disabilities. It is not only a best practice—it is a requirement for creating inclusive products.</p><h2>Why Accessibility Matters</h2><p>Over 1 billion people worldwide live with disabilities. Ensuring accessibility means opening your product to a wider audience.</p><h3>Common Barriers</h3><ul><li>Poor color contrast</li><li>Missing alt text</li><li>Non-semantic HTML</li><li>Unlabeled form controls</li></ul><h2>Semantic HTML</h2><p>Semantics help assistive technologies convey structure. Using elements like <code>header</code>, <code>main</code>, <code>footer</code>, and <code>nav</code> improves navigation.</p><h2>Keyboard Navigation</h2><p>Many users rely on keyboards, not mice. Ensuring everything is accessible via Tab, Enter, and arrow keys is essential.</p><h3>Focus Management</h3><p>Managing focus avoids confusion when modals or dynamic content appear.</p><h2>ARIA Basics</h2><p>WAI-ARIA attributes enhance accessibility in complex UI patterns—when used correctly.</p><h2>Conclusion</h2><p>Accessibility is a continuous practice. By improving small elements—color, structure, keyboard support—you dramatically improve user experience for everyone.</p>"
      },
      {
        "id": 3,
        "title": "How to Optimize React Apps",
        "date_created": "2025-04-27",
        "written_by": "John Doe",
        "image": "https://placehold.co/320x240",
        "short_description": "A guide to improving performance in React applications.",
        "tags": ["React", "Performance", "Optimization", "Frontend", "Web Development"],
        "content": "<h1>This is a placeholder generated by AI</h1><h1>How to Optimize React Apps</h1><p>Performance is crucial for creating fast and responsive React applications. With the right techniques, developers can significantly improve load times and runtime performance.</p><h2>Minimizing Re-renders</h2><p>React re-renders components when state or props change. Over-rendering is a major performance bottleneck.</p><h3>Tools for Optimization</h3><ul><li>React.memo()</li><li>useCallback()</li><li>useMemo()</li></ul><h2>Code Splitting</h2><p>Splitting your application into smaller bundles reduces initial load times. Tools like React.lazy and dynamic imports make this easy.</p><h2>Virtualization</h2><p>Rendering long lists can kill performance. Virtualization libraries such as react-window help render only visible items.</p><h2>State Management Best Practices</h2><p>Keeping state local, reducing global state, and using performant libraries helps avoid cascading renders.</p><h2>Conclusion</h2><p>Optimizing React apps requires understanding rendering behavior and using modern performance tools. Small improvements lead to noticeable speed gains.</p>"
      },
      {
        "id": 4,
        "title": "UI/UX Trends to Watch in 2025",
        "date_created": "2025-05-09",
        "written_by": "John Doe",
        "image": "https://placehold.co/320x240",
        "short_description": "A look at the most influential UI/UX trends emerging in 2025.",
        "tags": ["UI/UX", "Design", "Trends", "Web Development"],
        "content": "<h1>This is a placeholder generated by AI</h1><h1>UI/UX Trends to Watch in 2025</h1><p>The digital design landscape evolves rapidly. In 2025, designers are embracing new technologies and methodologies that shape how users interact with products.</p><h2>Hyper-Personalization</h2><p>AI-driven personalization enhances user journeys by delivering customized content and layouts.</p><h2>Voice and Gesture Interfaces</h2><p>Natural interaction models are becoming mainstream across mobile, desktop, and wearable devices.</p><h2>Minimalist Design Evolution</h2><p>Minimalism remains popular but now focuses on clarity rather than simplicity alone.</p><h2>3D and Motion Design</h2><p>Subtle 3D elements and animations create immersive experiences without overwhelming users.</p><h2>Conclusion</h2><p>2025’s design trends highlight a shift toward intelligent, intuitive, and adaptive interfaces.</p>"
      },
      {
        "id": 5,
        "title": "Getting Started with TypeScript",
        "date_created": "2025-06-14",
        "written_by": "John Doe",
        "image": "https://placehold.co/320x240",
        "short_description": "A practical introduction to TypeScript.",
        "tags": ["TypeScript", "JavaScript", "Web Development", "Frontend", "Best Practices"],
        "content": "<h1>This is a placeholder generated by AI</h1><h1>Getting Started with TypeScript</h1><p>TypeScript extends JavaScript with static types, making applications more scalable and maintainable.</p><h2>Why TypeScript?</h2><ul><li>Type safety</li><li>Better tooling</li><li>Improved readability</li><li>Fewer runtime bugs</li></ul><h2>Basic Types</h2><p>TypeScript includes primitives like <code>string</code>, <code>number</code>, <code>boolean</code>, and advanced types such as unions and generics.</p><h2>Working With Interfaces</h2><p>Interfaces allow developers to define the shape of objects, improving consistency across codebases.</p><h2>Using TypeScript in React</h2><p>TypeScript enhances component props, reducers, and context typing.</p><h2>Conclusion</h2><p>Learning TypeScript is an investment that pays off quickly through cleaner code and fewer bugs.</p>"
      },
      {
        "id": 6,
        "title": "Building Reusable Components in React",
        "date_created": "2025-07-02",
        "written_by": "John Doe",
        "image": "https://placehold.co/320x240",
        "short_description": "Learn how to create reusable, maintainable React components.",
        "tags": ["React", "Frontend", "Web Development", "Best Practices"],
        "content": "<h1>This is a placeholder generated by AI</h1><h1>Building Reusable Components in React</h1><p>Reusable components reduce duplication and enable teams to build faster with consistency.</p><h2>Principles of Reusability</h2><ul><li>Single Responsibility</li><li>Composability</li><li>Predictable APIs</li></ul><h2>Using Props Effectively</h2><p>Props define how components communicate. Designing a consistent and predictable API increases usability.</p><h2>Controlled vs Uncontrolled Components</h2><p>Understanding these two patterns is essential for form building and state management.</p><h2>Conclusion</h2><p>Well-crafted components become building blocks for entire applications and design systems.</p>"
      },
      {
        "id": 7,
        "title": "The Future of CSS: What to Expect",
        "date_created": "2025-08-10",
        "written_by": "John Doe",
        "image": "https://placehold.co/320x240",
        "short_description": "An exploration of upcoming CSS features and best practices.",
        "tags": ["Design", "Frontend", "Trends", "Web Development"],
        "content": "<h1>This is a placeholder generated by AI</h1><h1>The Future of CSS: What to Expect</h1><p>CSS continues to evolve with powerful features that simplify styling and layout workflows.</p><h2>Container Queries</h2><p>This long-awaited feature revolutionizes responsive design by allowing styles based on parent containers instead of the viewport.</p><h2>CSS Nesting</h2><p>Nesting simplifies stylesheet organization and reduces verbosity.</p><h2>Subgrid Layout</h2><p>Subgrid enhances CSS Grid by enabling child elements to inherit layout tracks from parent containers.</p><h2>Conclusion</h2><p>Modern CSS unlocks new styling possibilities with less code and more flexibility.</p>"
      },
      {
        "id": 8,
        "title": "Introduction to Web Performance Auditing",
        "date_created": "2025-09-05",
        "written_by": "John Doe",
        "image": "https://placehold.co/320x240",
        "short_description": "A beginner-friendly walk-through of performance auditing.",
        "tags": ["Performance", "Web Development", "Frontend", "Best Practices", "Optimization"],
        "content": "<h1>This is a placeholder generated by AI</h1><h1>Introduction to Web Performance Auditing</h1><p>Performance auditing is essential for building fast, reliable, and user-friendly websites.</p><h2>Key Metrics</h2><ul><li>Largest Contentful Paint (LCP)</li><li>Cumulative Layout Shift (CLS)</li><li>First Input Delay (FID)</li><li>Total Blocking Time (TBT)</li></ul><h2>Common Bottlenecks</h2><p>Images, JavaScript bundles, and network latency are typical sources of slowdowns.</p><h2>Tools for Auditing</h2><ul><li>Lighthouse</li><li>WebPageTest</li><li>Chrome DevTools</li></ul><h2>Fixing Issues</h2><p>Inlining critical CSS, code splitting, caching, and image optimization all contribute to better performance.</p><h2>Conclusion</h2><p>Regular audits help maintain user satisfaction and improve search engine ranking.</p>"
      },
      {
        "id": 9,
        "title": "Designing for Dark Mode",
        "date_created": "2025-10-21",
        "written_by": "John Doe",
        "image": "https://placehold.co/320x240",
        "short_description": "Best practices for crafting dark mode experiences.",
        "tags": ["UI/UX", "Design", "Accessibility", "Frontend", "Best Practices"],
        "content": "<h1>This is a placeholder generated by AI</h1><h1>Designing for Dark Mode</h1><p>Dark mode is now a standard feature across apps and operating systems. Designing for it requires thoughtful use of color, contrast, and accessibility considerations.</p><h2>Benefits of Dark Mode</h2><ul><li>Reduced eye strain</li><li>Battery savings on OLED screens</li><li>Modern aesthetic</li></ul><h2>Color and Contrast</h2><p>Dark mode requires careful contrast ratios to maintain readability without harsh brightness.</p><h2>Brand Adaptability</h2><p>Design systems must adapt brand colors to both light and dark themes.</p><h2>Conclusion</h2><p>A well-executed dark mode enhances usability, accessibility, and user satisfaction.</p>"
      }
    ],
  }

  getBlogContent() {
    return this.b.blogs
  }
  getServerData() {
    let serverData;

    return serverData
  }
  /* Parse a string containg HTML markup and return an Array of BlogSections */
  getBlogObjectContent(route: keyof(typeof this.b)): Array<BlogSection> {
    let result: Array<BlogSection>;
    let splitReg = new RegExp(/<\x2f\D\d?>/,"g");

    result = this.b[route][0].content.split(splitReg).map(
      function(el): BlogSection {
        let temp = el.slice(1).split(">");
        switch(temp[0]){
          case "h1":
            return {elementType: ElementType.H1, elementContent: temp[1]}
            break;
          case "h2":
            return {elementType: ElementType.H2, elementContent: temp[1]}
            break;
          case "h3":
            return {elementType: ElementType.H3, elementContent: temp[1]}
            break;
          case "h4":
            return {elementType: ElementType.H4, elementContent: temp[1]}
            break;
          case "h5":
            return {elementType: ElementType.H5, elementContent: temp[1]}
            break;
          case "h6":
            return {elementType: ElementType.H6, elementContent: temp[1]}
            break;
          case "p":
            return {elementType: ElementType.P, elementContent: temp[1]}
            break;
          default:
            return {elementType: ElementType.UNDEFINED, elementContent: ""}
        }
      }
    );
    result.pop();

    return result;
  }
  getBlogObjectContentById(id: number): Array<BlogSection> {
    let result: Array<BlogSection>;
    let splitReg = new RegExp(/<\x2f\D\d?>/,"g");
    let blog = this.b.blogs.find(blog => blog.id === id);

    if(blog === undefined) blog = this.b.emptyBlog[0];

    if(blog.id != -1){
      console.log(blog.content)
      result = blog.content.split(splitReg).map(
        function(el): BlogSection {
          let temp = el.slice(1).split(">");
          switch(temp[0]){
            case "h1":
              return {elementType: ElementType.H1, elementContent: temp[1]}
            case "h2":
              return {elementType: ElementType.H2, elementContent: temp[1]}
            case "h3":
              return {elementType: ElementType.H3, elementContent: temp[1]}
            case "h4":
              return {elementType: ElementType.H4, elementContent: temp[1]}
            case "h5":
              return {elementType: ElementType.H5, elementContent: temp[1]}
            case "h6":
              return {elementType: ElementType.H6, elementContent: temp[1]}
            case "p":
              return {elementType: ElementType.P, elementContent: temp[1]}
            default:
              return {elementType: ElementType.UNDEFINED, elementContent: ""}
          }
        }
      );
      result.pop();
    }
    else return [{elementType: ElementType.H1, elementContent: "Blog doesn't exist"}];

    return result;
  }
}
