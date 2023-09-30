import React from 'react'
import api_structure from '../../images/blog/api_structure.png'
import folder_structure from '../../images/blog/folder_structure.png'
import testing_request from '../../images/blog/testing_request.png'
import testing_response from '../../images/blog/testing_response.png'
import '../style/base.sass'

export default function graphql() {

  
   return (
    <>
    <title>Blog</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Martian+Mono&display=swap" rel="stylesheet"></link>
      
    <div className='blog'>
      <img src="https://i.pinimg.com/564x/0c/0d/93/0c0d93995f1678f95f056cb482d28ff6.jpg" className='blog-hero' alt="" />
    <div className='blog-heading'>/making an anime data GraphQL API</div>
    <div className='blog-author'>by anuj sharma</div>
    <div className='blog-sub'>12 min read</div>

    <div className='blog-content'>
    Ahead is a good read for nerd weebs.<br/>
    <div className='stack-list'>Understanding of basic concepts of GraphQL is required. You can check <a className='blog-link' href='https://www.howtographql.com'> howtographql.com </a></div>
    <br/>
    
    <h2 className='blog-subtitles'>Stack.</h2>
    <div className='stack-list'>
        Language/ Environment : 
        <div className='stack-list-element'>Node.JS</div> 
        <div className='stack-list-element'>Javascript</div>
      </div> 

    <div className='stack-list'>
      Frameworks/ Libraries : 
      <div className='stack-list-element'>Express</div>
      <div className='stack-list-element'>Apollo Server</div> 
      <div className='stack-list-element'>Axios</div>
      <div className='stack-list-element'>JSDOM</div>
    </div> 

    <div className='stack-list'>
      Dev Tools : 
      <div className='stack-list-element'>ESLint</div> 
      <div className='stack-list-element'>Babel</div>
    </div>


    <h2 className='blog-subtitles'>Architecture.</h2>
    The quote unquote plan of the project.
    
    <h3 className='blog-subtitles-sm'>API Structure</h3>
    <img src={api_structure} className='blog-img blog-img-structure'/>
    3 Types. 6 Queries. Each query returns a list of types shown in diagram.

    <h3 className='blog-subtitles-sm'>Folder Structure</h3>
    <img src={folder_structure} className='blog-img'/>




    <h2 className='blog-subtitles'>Implementation.</h2>
    Enough chit chat! Lets get our hands dirty now.

    <h3 className='blog-subtitles-sm'>Dev Tools</h3>
    Starting with configuration of essential dev tools.
    <div className='blog-subheading-sm' >Babel</div>Compiler that transforms modern Javascript code into compatible version for older browsers or environments.
    <div className='stack-list'>Create a <span className='filename'>.babelrc</span> file</div> 
    <div className='code-snippet'>
    &#123;<br/>
    <span className='keyword'>"presets"</span>: [<br/>
      <span className='string'>"@babel/preset-env"</span>,<br/>
    ]<br/>
    &#125;
    </div>
    <div className='stack-list'>Update<span className='filename'>package.json</span></div>  
    <div className='code-snippet'>
    <span className='keyword'>"scripts"</span>: &#123;<br/>
      <span className='keyword'>"start"</span>: <span className='string'>"babel-node app.js --exec"</span>,<br/>
    &#125;
    </div>


    <div className='blog-subheading-sm' >ESLint</div>Reports syntax errors, coding style violations, and potential programming issues. Maintains Code Quality.
    <div className='code-snippet'>
    $ npm init @eslint/config
    </div>
    <div className='stack-list'>Update<span className='filename'>package.json</span></div>
    <code className='code-snippet'>
    <span className='keyword'>"scripts"</span>: <span className='units'>&#123;</span><br/>
      <span className='keyword'>"start"</span>: <span className='string'>"npx eslint app.js src/** --fix && babel-node app.js --exec""</span>,<br/>
    <span className='units'>{"}"}</span>
    </code>  


    <h3 className='blog-subtitles-sm'>Apollo Server</h3>
    A spec-compliant GraphQL server.<br />
    Roll a basic express server boilerplate with an apollo server middleware.
    <div className='code-snippet'>
    <span className='datatype'>const</span> <span className='keyword'>app</span> = <span className='yellow'>express</span>()<br /><br />

    <span className='comment'>// apollo server middleware</span><br />
    <span className='datatype'>const</span> <span className='keyword'>server</span> = <span className='datatype'>new</span> <span className='class'>ApolloServer</span>{"({"}<br />
    <span className='keyword'>playground</span>: <span className='units'>{"{"}</span><br />
    <span className='keyword'>endpoint</span>: <span className='string'>'/api</span>'<br />
        <span className='units'>{"}"}</span><br />
      {"})"}<br /><br />

      <span className='keyword'>server</span>.<span className='yellow'>applyMiddleware</span>{"({"} <span className='keyword'>app</span>, <span className='keyword'>path</span>: <span className='string'>'/api'</span> {"})"}<br /><br />

      <span className='keyword'>app</span>.<span className='yellow'>listen</span>(<span className='keyword'>process</span>.<span className='keyword'>env</span>.<span className='datatype'>PORT</span> || <span className='yellow'>4000</span>,<br />
      () ={">"} 
        <span className='keyword'>console</span>.<span className='yellow'>log</span>(<span className='string'>'Server is running'</span>)
    {")"}
    </div> 

    <h3 className='blog-subtitles-sm'>Gathering Data (web crawlers)</h3>
    Now that server is running. We need query functions for each query.<br/>
    We will crawl data from myanimelist pages by axios request. 
    <div className='stack-list'>In <span className='filename'>/src/queries/</span> create <span className='filename'>airing.js</span></div> 
    <div className='code-snippet'>

    <span className='datatype'>const</span> <span className='keyword'>link</span> = <span className='string'>'https://myanimelist.net/topanime.php?type=airing'</span><br /><br />
    
    <span className='datatype'>async function</span> <span className='yellow'>airing</span> () <span className='yellow'>{"{"}</span><br />

    <span className='units'>try {"{"}</span><br />
    <span className='datatype'>const</span> <span className='keyword'>response</span> = <span className='units'>await</span> <span className='keyword'>axios</span>.<span className='yellow'>get</span>(<span className='keyword'>link</span>)<br />
    <span className='datatype'>const</span> <span className='keyword'>data</span> = <span className='keyword'>helpers</span>.<span className='yellow'>fetchAnimeList</span>(<span className='keyword'>response.data</span>)<br />
    <span className='units'>return</span> <span className='keyword'>data</span><br />
        <span className='units'>{"}"} catch{"{"}<span className='keyword'>error</span>{"}"}{"{"}</span><br />
        <span className='units'>return </span>{"{"}<span className='keyword'>error</span>:{"{"}<span className='keyword'>message</span>:<span className='string'>"not found!"</span>,<span className='keyword'>status</span>:<span className='datatype'>false</span> {"}"}{"}"}<br />
        <span className='units'>{"}"}</span><br /><br />
      <span className='units'>export default</span> <span className='keyword'>airing</span>
    </div>  
    We need helpers to scrape data from html elements for query functions.  
    <div className='stack-list'>In <span className='filename'>/src/util/</span> create <span className='filename'>helpers.js</span></div> 
    <div className='code-snippet'>
    <span className='datatype'>const</span> <span className='yellow'>fetchAnimeList</span> = ( <span className='keyword'> data </span> )={">{"}<br />

    <span className='comment'>// spliting list of html elements</span><br />
    <span className='datatype'>const</span> <span className='keyword'>list</span> = <span className='keyword'>data</span>.<span className='yellow'>split</span>(<span className='string'>{'"<tr class="ranking-list"></tr>"'}</span>)<br />
    <span className='datatype'>const</span> <span className='keyword'>animeList</span> = <span className='keyword'>data</span>.<span className='yellow'>map</span>{"("}<span className='keyword'>item </span>={">"}{"{"}<br />
    <span className='datatype'>const</span> <span className='keyword'>anime</span> = <span className='datatype'>new</span> <span className='class'>Item</span>(<span className='keyword'>item</span>)<br />
        <span className='units'>return </span><span className='keyword'>anime</span>.<span className='yellow'>feed</span>()<br />
      {"})"}<br />
      <span className='units'>return </span><span className='keyword'>animeList</span><br />    
    {"}"}<br /><br />
    <span className='units'>export default</span> {"{"}<span className='keyword'>fetchAnimeList</span>{"}"}
    
    </div>  
    Create classes to scrape data. (For cleaner code and reusability)
    <h3 className='blog-subheading-sm'>JSDOM</h3>
    A library which parses and interacts with assembled HTML just like a browser.
    <div className='stack-list'>In <span className='filename'>/src/models/</span> create <span className='filename'>item.js</span></div> 
    <div className='code-snippet '>

    <span className='units'>import</span> <span className='keyword'>jsdom</span>  <span className='units'>from</span><span className='string'>"jsdom"</span> <br />
    <span className='datatype'>const</span> {"{"}<span className='class'>JSDOM</span> {"}"} = <span className='class'>jsdom</span><br /><br/>
  
    <span className='datatype'>const</span> <span className='class'>Item</span>  <span className='units'>{"{"}</span><br />
    <span className='datatype'>constructor</span>(<span className='keyword'>data</span>) <span className='units'>{"{"}</span><br />
    
    <span className='datatype'>this</span>.<span className='keyword'>src</span> =   <span className='datatype'>new</span> <span className='class'>JSDOM</span><span className='keyword'>(data)</span><br />
    <span className='datatype'>this</span>.<span className='keyword'>page</span> = <span className='datatype'>this</span>.<span className='keyword'>src.window.document</span> <br />
    <span className='datatype'>this</span>.<span className='keyword'>name</span> =   <span className='datatype'>this</span>.<span className='keyword'>page.</span><span className='yellow'>querySelector(<span className='string'>'.anime_ranking_h3'</span>)</span>.<span className='keyword'>textContent</span><br />
    <span className='datatype'>this</span>.<span className='keyword'>id</span> =   <span className='datatype'>this</span>.<span className='keyword'>page.</span><span className='yellow'>querySelector(<span className='string'>'.hoverinfo_trigger'</span>)</span><br/>.<span className='yellow'>getAttribute(<span className='string'>'.href'</span>)</span><br />
    <span className='datatype'>this</span>.<span className='keyword'>rating</span> =   <span className='datatype'>this</span>.<span className='keyword'>page.</span><span className='yellow'>querySelector(<span className='string'>'.score-label'</span>)</span>.<span className='keyword'>textContent</span><br />
    <span className='datatype'>this</span>.<span className='keyword'>img</span> =   <span className='datatype'>this</span>.<span className='yellow'>img(<span className='keyword'>this.src</span>)</span><br />
        <span className='units'>{"}"}</span><br /><br/>
        <span className='yellow'>img</span>(<span className='keyword'>tag</span>) <span className='units'>{"{"}</span><br />
        <span className='datatype'>const </span><span className='keyword'>lazyLoadElement</span> = <span className='keyword'>tag.window.document.</span><span className='yellow'>querySelector(<span className='string'>'.lazyload'</span>)</span><br />
        <span className='datatype'>const </span><span className='keyword'>rawUrl</span> = <span className='keyword'>lazyLoadElement</span>.<span className='yellow'>getAttribute(<span className='string'>'.data-src'</span>)</span><br />
        <span className='datatype'>const </span><span className='keyword'>animeId</span> = <span className='keyword'>rawUrl</span>.<span className='yellow'>split(<span className='string'>'anime/'</span>)</span>[1].<span className='yellow'>split(<span className='string'>'anime/'</span>)</span>[0]<br />
        <span className='units'>return</span> <span className='string'>`https://cdn.myanimelist.net/images/anime/<span className='keyword'>{"${animeId}"}</span>.jpg`</span>
        <span className='units'>{"}"}</span><br /><br/>

        <span className='yellow'>feed</span>() <span className='units'>{"{"}</span><br />
        <span className='units'>return{"{"}</span><br/>
        <span className='keyword'>name</span>: <span className='datatype'>this</span>.<span className='keyword'>name</span><br/>
        <span className='keyword'>id</span>: <span className='datatype'>this</span>.<span className='keyword'>id</span><br/>
        <span className='keyword'>rating</span>: <span className='datatype'>this</span>.<span className='keyword'>rating</span><br/>
        <span className='keyword'>image</span>: <span className='datatype'>this</span>.<span className='keyword'>image</span><br/>
        
        <span className='units'>{"}}"}</span>
    </div>  
    Making these classes can take efforts.<br/> You might need to work around inspect element to find the tags of required data.


    <h3 className='blog-subtitles-sm'>GraphQL (schemas and resolvers)</h3>
    After we done creating all the queries we need schemas and resolvers to put everything into place.
    <h3 className='blog-subheading-sm'>Schema</h3>
    A blueprint that defines the types, fields, and operations available for querying.
    <div className='stack-list'>In <span className='filename'>/src/graphql/</span> create <span className='filename'>schema.js</span></div> 
    <div className='code-snippet'>
    
    <span className='units'>import</span> {"{"} <span className='keyword'>gql</span> {"}"} <span className='units'>from</span> <span className='string'>'apollo-server-express'</span><br/>

    <span className='units'>export default</span> <span className='yellow'>gql</span><span className='string'>`<br/>
    type Query {"{"}<br/>
        popular : [Item!]! <br/>
        airing : [Item!]!<br/>
        rated : [Item!]!<br/>
        search(key: String!) : [Unit]!<br/>
        detail(id: String!) : Set!<br/>
        map(name: String!) : Set!<br/>
        {"}"}<br/><br/>

      type Unit{"{"}<br/>
        name: String!<br/>
        id : String!<br/>
        {"}"}<br/><br/>


      type Item{"{"}<br/>
        name: String!<br/>
        rating: String!<br/>
        id : String!<br/>
        image: String!<br/>
        {"}"}<br/><br/>


      type Set{"{"}<br/>
        name: String!<br/>
        rating: String!<br/>
        genre: [String!]<br/>
        description: String!<br/>
        image: String!<br/>
        episodes: String!<br/>
        trailer: String!<br/>
        {"}"}<br/>

    `

    </span>
    </div>  

    <h3 className='blog-subheading-sm'>Resolver</h3>
    Functions responsible for fetching and returning data fields defined in the schema.
    <div className='stack-list'>In <span className='filename'>/src/graphql/</span> create <span className='filename'>resolver.js</span></div> 
    <div className='code-snippet'>
    <span className='units'>import</span> <span className='keyword'>airing</span>  <span className='units'>from</span> <span className='string'>'../queries/airing'</span><br/>

    <span className='units'>export default {"{"}</span><br/>
    <span className='keyword'>Query: <span className='units'>{"{"}</span></span><br/>
    <span className='yellow'>airing: <span className='keyword'>{"() =>"}</span> airing</span>()<br/>
    <span className='units'>{"}"},</span><br/>
    <span className='keyword'>Item: <span className='units'>{"{"}</span></span><br/>
    <span className='yellow'>name: <span className='keyword'>{"(parent) => parent.name"}</span> </span>,<br/>
    <span className='yellow'>rating: <span className='keyword'>{"(parent) => parent.rating"}</span> </span>,<br/>
    <span className='yellow'>id: <span className='keyword'>{"(parent) => parent.id"}</span> </span>,<br/>
    <span className='yellow'>image: <span className='keyword'>{"(parent) => parent.image"}</span> </span>,<br/>
    <span className='units'>{"}"},</span><br/>
    

    <span className='units'>{"}"}</span>
    </div> 
    Create all the queries, create resolvers for them and their types as well.<br/> We can use one type for multiple queries. 

    <h2 className='blog-subtitles'>Testing</h2>
    At last we should be having the api running and serving proper.<br/>
    One intresting thing about GraphQL servers is that they come with a testing platform playground.<br/>
    <span className='stack-list'>Open <span className='filename'>localhost:4000/api</span> in your browser.</span>
    Create a query and request it.<br/><br/>  
    <img src={testing_request} className='blog-img'/>
    We get a response.<br/><br/>
    <img src={testing_response} className='blog-img blog-img-structure'/><br/><br/>

    So this is how you can create an anime data GraphQL API.<br/> 
    Have fun with it making creative apps.
    <span className='stack-list'>You can also check <a className='blog-link' href='https://kaizenlink.tech/'> kaizenlink.tech </a> where the API is deployed.</span>
    <br/>
    Aight uwu ara ara see yall in the next one.
    </div>
    </div>
    </>
  )
}
