const send = require('koa-send');
const Koa = require('koa');
const Router = require('koa-router');
const userAgent = require('koa-useragent');
const path = require('path')
const swig = require('swig');
const router = new Router();
const app = new Koa();

const templateRoot = path.join(__dirname, "../dist/template")

app.use(userAgent);

router.get('/', function (ctx, next) {
    ctx.cookies.set("landing", ctx.request.query.landing, {
        httpOnly: false,
    })
    if (!ctx.userAgent.isMobile) {
        let template = swig.compileFile(path.resolve(templateRoot, "index.html"));
        ctx.body = template({})
    } else {
        let template = swig.compileFile(path.resolve(templateRoot, "mobile.html"));
        ctx.body = template({})
    }
});

router.get('/second', function (ctx, next) {
    if (!ctx.userAgent.isMobile) {
        let template = swig.compileFile(path.resolve(templateRoot, "second.html"));
        ctx.body = template({})
    } else {
        let template = swig.compileFile(path.resolve(templateRoot, "mobileSecond.html"));
        ctx.body = template({})
    }
});

router.get('/web', function (ctx, next) {
    if (!ctx.userAgent.isMobile) {
        let template = swig.compileFile(path.resolve(templateRoot, "web.html"));
        ctx.body = template({})
    } else {
        let template = swig.compileFile(path.resolve(templateRoot, "mobileWeb.html"));
        ctx.body = template({})
    }
});

router.get('/android', function (ctx, next) {
    if (!ctx.userAgent.isMobile) {
        let template = swig.compileFile(path.resolve(templateRoot, "android.html"));
        ctx.body = template({})
    } else {
        let template = swig.compileFile(path.resolve(templateRoot, "mobileAndroid.html"));
        ctx.body = template({})
    }
});

router.get('/landing', function (ctx, next) {
    if (!ctx.userAgent.isMobile) {
        let template = swig.compileFile(path.resolve(templateRoot, "landing.html"));
        ctx.body = template({})
    } else {
        let template = swig.compileFile(path.resolve(templateRoot, "mobileLanding.html"));
        ctx.body = template({})
    }
});

router.get('/design', function (ctx, next) {
    if (!ctx.userAgent.isMobile) {
        let template = swig.compileFile(path.resolve(templateRoot, "design.html"));
        ctx.body = template({})
    } else {
        let template = swig.compileFile(path.resolve(templateRoot, "mobileDesign.html"));
        ctx.body = template({})
    }
});

router.get('/product', function (ctx, next) {
    if (!ctx.userAgent.isMobile) {
        let template = swig.compileFile(path.resolve(templateRoot, "product.html"));
        ctx.body = template({})
    } else {
        let template = swig.compileFile(path.resolve(templateRoot, "mobileProduct.html"));
        ctx.body = template({})
    }
});
router.get('/tagBlogs', function (ctx, next) {
    if (!ctx.userAgent.isMobile) {
        let template = swig.compileFile(path.resolve(templateRoot, "tagBlogs.html"));
        ctx.body = template({})
    } else {
        let template = swig.compileFile(path.resolve(templateRoot, "mobileTag.html"));
        ctx.body = template({})
    }
});
router.get('/archiveBlogs', function (ctx, next) {
    if (!ctx.userAgent.isMobile) {
        let template = swig.compileFile(path.resolve(templateRoot, "archiveBlogs.html"));
        ctx.body = template({})
    } else {
        let template = swig.compileFile(path.resolve(templateRoot, "mobileArchive.html"));
        ctx.body = template({})
    }
});

router.get('/viewTags', function (ctx, next) {
    let template = swig.compileFile(path.resolve(templateRoot, "viewTags.html"));
    ctx.body = template({})
});

router.get('/viewArchive', function (ctx, next) {
    let template = swig.compileFile(path.resolve(templateRoot, "viewArchive.html"));
    ctx.body = template({})
});
router.get(/^\/static(?:\/|$)/, async(ctx) => {
    let filepath = ctx.path.replace(/static\//, "")
    await send(ctx, filepath, {
        root: path.join(__dirname, "../dist")
    });
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
console.log('listening on port 3000');